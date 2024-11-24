"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getShipmentActivity;
const fast_xml_parser_1 = require("fast-xml-parser");
const fs = __importStar(require("fs"));
function getShipmentActivity() {
    let xmlRequest = "shipping-activity-req-doc.xml";
    const parser = new fast_xml_parser_1.XMLParser();
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
    const responseXMLData = fs.readFileSync("sampleXMLRequest.xml", "utf8");
    debugger;
    let jResponse = parser.parse(responseXMLData);
    console.log(JSON.stringify(jResponse, null, 2));
    console.log("Execution Complete");
}
//# sourceMappingURL=../**/*.map/shipment/analyze-shipping-activity-xml.js.map