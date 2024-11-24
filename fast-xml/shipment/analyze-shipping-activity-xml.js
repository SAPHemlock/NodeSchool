"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getShipmentActivity;
var fast_xml_parser_1 = require("fast-xml-parser");
var fs = require("fs");
function getShipmentActivity() {
    var xmlRequest = "shipping-activity-req-doc.xml";
    var parser = new fast_xml_parser_1.XMLParser();
    // Read the XML file
    fs.readFile(xmlRequest, "utf8", function (err, xmlData) {
        if (err) {
            console.error("Error reading XML file:", err);
            return;
        }
        // console.log(xmlData);
        // Parse the XML data
        debugger;
        var jRequest = parser.parse(xmlData);
        console.log(JSON.stringify(jRequest));
    });
    /* const builder = new XMLBuilder();
      const xmlContent = builder.build(jObj);
      console.log(xmlContent); */
    var xmlResponse = "shipping-activity-res-doc.xml";
    var responseXMLData = fs.readFileSync(xmlResponse, "utf8");
    debugger;
    var jResponse = parser.parse(responseXMLData);
    console.log(JSON.stringify(jResponse, null, 2));
    console.log("Execution Complete");
}
getShipmentActivity();
