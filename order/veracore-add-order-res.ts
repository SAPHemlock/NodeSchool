import { XMLBuilder, XMLParser } from "fast-xml-parser";
import * as fs from "fs";

export default function readOrderResponse() {
  let xmlFileName = "./order/addorder-res-doc.xml";

  // Read the XML file
  fs.readFile(xmlFileName, "utf8", (err, xmlData) => {
    if (err) {
      console.error("Error reading XML file:", err);
      return;
    }

    // console.log(xmlData);
    // Parse the XML data
    const parser = new XMLParser();
    let jObj = parser.parse(xmlData);
    console.log(JSON.stringify(jObj));
  });
}

readOrderResponse();
