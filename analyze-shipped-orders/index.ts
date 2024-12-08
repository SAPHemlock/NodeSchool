import * as fs from "fs";
import { parse } from "csv-parse";
import * as xml2js from "xml2js";
import { CustomerInfo } from "./types";
import pino from "pino";
import config from "dotenv";

// Create a Pino logger instance
const logger = pino(pino.destination("./app.log"));

// Function to read the CSV file
async function readCSV(fileName: string): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const results: number[] = [];
    fs.createReadStream(fileName)
      .pipe(parse({ columns: false, trim: true }))
      .on("data", (row: string[]) => {
        const number = parseFloat(row[0]);
        if (!isNaN(number)) {
          results.push(number);
        }
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error: any) => {
        reject(error);
      });
  });
}

// Function to process each order
async function processOrder(oms: CustomerInfo, orderId: number): Promise<void> {
  const body = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soap12:Header>
        <AuthenticationHeader xmlns="http://sma-promail/">
            <Username>${oms.username}</Username>
            <Password>${oms.password}</Password>
        </AuthenticationHeader>
    </soap12:Header>
    <soap12:Body>
        <GetOrderInfo xmlns="http://sma-promail/">
            <orderId>${orderId}</orderId>
        </GetOrderInfo>
    </soap12:Body>
</soap12:Envelope>`;

  try {
    const response = await fetch(
      "https://fulfillment.hemlockharling.com/pmomsws/order.asmx",
      {
        method: "POST",
        headers: {
          SOAPAction: "http://omscom/GetOrderInfo",
          "Content-Type": "application/soap+xml; charset=utf-8",
        },
        body: body,
      }
    );

    const text = await response.text();

    if (!response.ok) {
      logger.error(`Response for orderId ${orderId}: ${text}`);
    } else {
      // Parse the response and count PickPackType nodes
      const result = await xml2js.parseStringPromise(text, {
        explicitArray: false,
      });
      const pickPackTypes =
        result["soap:Envelope"]["soap:Body"]["GetOrderInfoResponse"][
          "GetOrderInfoResult"
        ]["ShippingOrders"]["PickPackType"];
      const count = Array.isArray(pickPackTypes) ? pickPackTypes.length : 1;

      if (count > 1) {
        logger.info(
          `${oms.customerName}|Number of PickPackType nodes for orderId ${orderId}: ${count}`
        );
      }
    }
  } catch (error) {
    logger.error(`Error processing orderId ${orderId}: ${error}`);
  }
}

// Main function to read CSV and process orders
export async function readCSVAndProcessOrders() {
  try {
    config.config();

    const jsonArray = process.env.CUSTOMERS
      ? JSON.parse(process.env.CUSTOMERS)
      : [];
    console.log(jsonArray);

    if (jsonArray.length == 0) {
      logger.error("No customers found in the environment variable.");
      return;
    }

    const customers: CustomerInfo[] = jsonArray;

    for (const customer of customers) {
      logger.info(`Processing orders for ${customer.customerName}`);
      const orders = await readCSV(
        `./analyze-shipped-orders/${customer.csvFileName}`
      );
      for (const orderId of orders) {
        await processOrder(customer, orderId);
      }
    }
  } catch (error) {
    logger.error("Error:", error);
  }
}
