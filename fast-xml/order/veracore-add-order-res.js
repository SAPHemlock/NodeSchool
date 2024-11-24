"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = readOrderResponse;
var fast_xml_parser_1 = require("fast-xml-parser");
var fs = require("fs");
function readOrderResponse() {
    var xmlFileName = "addorder-res-doc.xml";
    // Read the XML file
    fs.readFile(xmlFileName, "utf8", function (err, xmlData) {
        if (err) {
            console.error("Error reading XML file:", err);
            return;
        }
        // console.log(xmlData);
        // Parse the XML data
        var parser = new fast_xml_parser_1.XMLParser();
        var jObj = parser.parse(xmlData);
        console.log(JSON.stringify(jObj));
    });
}
readOrderResponse();
