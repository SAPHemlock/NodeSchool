import { XMLBuilder, XMLParser } from "fast-xml-parser";
import * as fs from "fs";

export default function getShipmentActivity() {
  let xmlRequest = "shipping-activity-req-doc.xml";
  const parser = new XMLParser();

  // Read the XML file
  fs.readFile(xmlRequest, "utf8", (err, xmlData) => {
    if (err) {
      console.error("Error reading XML file:", err);
      return;
    }

    // console.log(xmlData);
    // Parse the XML data
    debugger;
    let jRequest = parser.parse(xmlData);
    console.log(JSON.stringify(jRequest));
  });

  /* const builder = new XMLBuilder();
    const xmlContent = builder.build(jObj);
    console.log(xmlContent); */

  let xmlResponse = "shipping-activity-res-doc.xml";
  const responseXMLData = fs.readFileSync(xmlResponse, "utf8");
  debugger;
  let jResponse = parser.parse(responseXMLData);
  console.log(JSON.stringify(jResponse, null, 2));

  console.log("Execution Complete");
}

getShipmentActivity();
