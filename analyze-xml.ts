import { XMLParser } from "fast-xml-parser";
import * as fs from "fs";

const sampleRequest: string = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <AuthenticationHeader xmlns="http://sma-promail/">
      <Username>string</Username>
      <Password>string</Password>
    </AuthenticationHeader>
  </soap12:Header>
  <soap12:Body>
    <AddOrder xmlns="http://sma-promail/">
      <order>
      </order>
    </AddOrder>
  </soap12:Body>
</soap12:Envelope>`;

export function testXML() {
  const xmlFileName = "addorder-request-minimal.xml";

  // Read the XML file
  fs.readFile(xmlFileName, "utf8", (err, xmlData) => {
    if (err) {
      console.error("Error reading XML file:", err);
      return;
    }

    debugger;
    console.log(xmlData);
    // Parse the XML data
    const parser = new XMLParser();
    // let jObj = parser.parse(sampleRequest);
    let jObj = parser.parse(xmlData);
    console.log(jObj);
  });

  /* const builder = new XMLBuilder();
  const xmlContent = builder.build(jObj);
  console.log(xmlContent); */
}

testXML();
