import { XMLParser } from "fast-xml-parser";
import * as fs from "fs";

const xmlFileName = "./order/addorder-request-minimal.xml";

// Read the XML file
fs.readFile(xmlFileName, "utf8", (err, xmlData) => {
  if (err) {
    console.error("Error reading XML file:", err);
    return;
  }

  debugger;
  //console.log(xmlData);
  // Parse the XML data
  const parser = new XMLParser();
  // let jObj = parser.parse(sampleRequest);
  let jObj = parser.parse(xmlData);
  console.log(jObj);
});

/* const builder = new XMLBuilder();
  const xmlContent = builder.build(jObj);
  console.log(xmlContent); */
