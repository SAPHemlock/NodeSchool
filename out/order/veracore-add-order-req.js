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
exports.default = readOrderXMLs;
const fast_xml_parser_1 = require("fast-xml-parser");
const fs = __importStar(require("fs"));
const sampleRequest = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <AuthenticationHeader xmlns="http://sma-promail/">
      <Username>string</Username>
      <Password>string</Password>
    </AuthenticationHeader>
    <DebugHeader xmlns="http://sma-promail/">
      <Debug>boolean</Debug>
      <Request>string</Request>
    </DebugHeader>
  </soap12:Header>
  <soap12:Body>
    <AddOrder xmlns="http://sma-promail/">
      <order>
        <Header>
          <ID>string</ID>
          <EntryDate>dateTime</EntryDate>
          <OrderEntryView>
            <SeqID>int</SeqID>
            <Description>string</Description>
          </OrderEntryView>
          <ReferenceNumber>string</ReferenceNumber>
          <PONumber>string</PONumber>
          <Comments>string</Comments>
          <IpAddress>string</IpAddress>
          <ApprovalComment>string</ApprovalComment>
          <InsertDate>dateTime</InsertDate>
          <UTCEntryDateTime>dateTime</UTCEntryDateTime>
        </Header>
        <Classification>
          <CampaignID>string</CampaignID>
          <ResponseMedia>
            <Description>string</Description>
          </ResponseMedia>
          <Source>
            <Description>string</Description>
          </Source>
          <Issue>
            <Issue>string</Issue>
          </Issue>
          <CustomerProject>
            <ID>string</ID>
          </CustomerProject>
          <CustomerCode>string</CustomerCode>
          <Store>string</Store>
          <Department>string</Department>
          <DistributionCenter>string</DistributionCenter>
          <Vendor>string</Vendor>
        </Classification>
        <Shipping>
          <FreightCarrier>
            <Name>string</Name>
          </FreightCarrier>
          <FreightService>
            <Description>string</Description>
          </FreightService>
          <FreightAccount>
            <SeqID>int</SeqID>
            <Description>string</Description>
            <FreightCarrier xsi:nil="true" />
            <Person xsi:nil="true" />
            <ThirdAcctNo>string</ThirdAcctNo>
            <NonResident>boolean</NonResident>
          </FreightAccount>
          <ShippingOption>
            <Description>string</Description>
          </ShippingOption>
          <FreightCode>string</FreightCode>
          <FreightCodeDescription>string</FreightCodeDescription>
          <ShipComments>string</ShipComments>
          <NeededBy>string</NeededBy>
          <Rush>boolean</Rush>
          <ReleaseDate>dateTime</ReleaseDate>
          <ThirdPartyType>int</ThirdPartyType>
          <ThirdAccountNumber>string</ThirdAccountNumber>
          <NCShip>boolean</NCShip>
          <NCPack>boolean</NCPack>
          <NCOffers>boolean</NCOffers>
          <NCHandling>boolean</NCHandling>
          <NCOffShipHandling>boolean</NCOffShipHandling>
          <NCSpecialHandling>boolean</NCSpecialHandling>
          <NCRush>boolean</NCRush>
        </Shipping>
        <Money>
          <PriceClass>
            <SeqID>int</SeqID>
            <Description>string</Description>
          </PriceClass>
          <ShippingHandlingCharge>decimal</ShippingHandlingCharge>
          <RushHandlingCharge>decimal</RushHandlingCharge>
          <NoChargeType>
            <Description>string</Description>
          </NoChargeType>
          <DiscountAmount>decimal</DiscountAmount>
          <DiscountPercent>float</DiscountPercent>
          <DiscountCode>
            <ID>string</ID>
            <Description>string</Description>
          </DiscountCode>
          <Coupon>
            <Code>string</Code>
          </Coupon>
          <SpecialHandlingCharge>decimal</SpecialHandlingCharge>
          <CreditAmount>decimal</CreditAmount>
          <GiftCertificate>
            <UID>string</UID>
            <Amount>decimal</Amount>
          </GiftCertificate>
          <GiftCertificateAmount>decimal</GiftCertificateAmount>
          <TaxPercent>decimal</TaxPercent>
          <NoChargeAmount>decimal</NoChargeAmount>
          <TaxAmount>decimal</TaxAmount>
        </Money>
        <Payment>
          <PaymentType>
            <Description>string</Description>
            <Sequence>int</Sequence>
          </PaymentType>
          <PaymentAmount>decimal</PaymentAmount>
          <CCNumber>string</CCNumber>
          <CCExpirationDate>string</CCExpirationDate>
          <CSC>string</CSC>
          <ARReference>string</ARReference>
          <Token>string</Token>
          <TransactionID>string</TransactionID>
          <AuthorizationCode>string</AuthorizationCode>
          <AuthorizationAmount>decimal</AuthorizationAmount>
          <AuthorizationDate>dateTime</AuthorizationDate>
        </Payment>
        <OrderVariables>
          <OrderVariable>
            <SeqID>int</SeqID>
            <VariableField xsi:nil="true" />
            <Value>string</Value>
            <ValueDescription>string</ValueDescription>
          </OrderVariable>
          <OrderVariable>
            <SeqID>int</SeqID>
            <VariableField xsi:nil="true" />
            <Value>string</Value>
            <ValueDescription>string</ValueDescription>
          </OrderVariable>
        </OrderVariables>
        <OrderedBy>
          <ORDOBY>
            <SeqID>int</SeqID>
            <CustomerID>string</CustomerID>
          </ORDOBY>
          <FullName>string</FullName>
          <FullNameWithSuffix>string</FullNameWithSuffix>
          <CityStateZip>string</CityStateZip>
          <CityStateZipCountry>string</CityStateZipCountry>
          <CompoundAddress>string</CompoundAddress>
        </OrderedBy>
        <ShipTo>
          <OrderShipTo>
            <SeqID>int</SeqID>
            <Flag>Other or OrderedBy</Flag>
            <Key>string</Key>
            <NeededBy>string</NeededBy>
            <ReleaseDate>dateTime</ReleaseDate>
            <Rush>boolean</Rush>
            <RushHandling>decimal</RushHandling>
            <Comments>string</Comments>
            <FreightCarrier xsi:nil="true" />
            <FreightService xsi:nil="true" />
            <ThirdPartyType>int</ThirdPartyType>
            <ThirdPartyAccountNumber>string</ThirdPartyAccountNumber>
            <FreightCode>string</FreightCode>
            <FreightCodeDescription>string</FreightCodeDescription>
            <SpecialHandling xsi:nil="true" />
            <SpecialHandlingCharge>decimal</SpecialHandlingCharge>
            <ShippingHandlingCharge>decimal</ShippingHandlingCharge>
            <FullName>string</FullName>
            <FullNameWithSuffix>string</FullNameWithSuffix>
            <CityStateZip>string</CityStateZip>
            <CityStateZipCountry>string</CityStateZipCountry>
            <CompoundAddress>string</CompoundAddress>
            <PickPacks xsi:nil="true" />
            <ShippingHandlingTaxAmount>decimal</ShippingHandlingTaxAmount>
            <ShippingHandlingTaxPercent>decimal</ShippingHandlingTaxPercent>
          </OrderShipTo>
          <OrderShipTo>
            <SeqID>int</SeqID>
            <Flag>Other or OrderedBy</Flag>
            <Key>string</Key>
            <NeededBy>string</NeededBy>
            <ReleaseDate>dateTime</ReleaseDate>
            <Rush>boolean</Rush>
            <RushHandling>decimal</RushHandling>
            <Comments>string</Comments>
            <FreightCarrier xsi:nil="true" />
            <FreightService xsi:nil="true" />
            <ThirdPartyType>int</ThirdPartyType>
            <ThirdPartyAccountNumber>string</ThirdPartyAccountNumber>
            <FreightCode>string</FreightCode>
            <FreightCodeDescription>string</FreightCodeDescription>
            <SpecialHandling xsi:nil="true" />
            <SpecialHandlingCharge>decimal</SpecialHandlingCharge>
            <ShippingHandlingCharge>decimal</ShippingHandlingCharge>
            <FullName>string</FullName>
            <FullNameWithSuffix>string</FullNameWithSuffix>
            <CityStateZip>string</CityStateZip>
            <CityStateZipCountry>string</CityStateZipCountry>
            <CompoundAddress>string</CompoundAddress>
            <PickPacks xsi:nil="true" />
            <ShippingHandlingTaxAmount>decimal</ShippingHandlingTaxAmount>
            <ShippingHandlingTaxPercent>decimal</ShippingHandlingTaxPercent>
          </OrderShipTo>
        </ShipTo>
        <BillTo>
          <Flag>Other or OrderedBy or DoNotUse or ShipTo</Flag>
          <FullName>string</FullName>
          <FullNameWithSuffix>string</FullNameWithSuffix>
          <CityStateZip>string</CityStateZip>
          <CityStateZipCountry>string</CityStateZipCountry>
          <CompoundAddress>string</CompoundAddress>
        </BillTo>
        <Offers>
          <OfferOrdered>
            <Offer xsi:nil="true" />
            <Quantity>int</Quantity>
            <CanceledQuantity>int</CanceledQuantity>
            <OrderShipTo xsi:nil="true" />
            <OrderShipToKey xsi:nil="true" />
            <PriceType>unsignedByte</PriceType>
            <UnitPrice>decimal</UnitPrice>
            <ShipType>short</ShipType>
            <ShippingHandling>decimal</ShippingHandling>
            <Discounts>decimal</Discounts>
            <DiscountPercent>int</DiscountPercent>
            <DocumentID>string</DocumentID>
            <SeqID>int</SeqID>
            <CloneLine>int</CloneLine>
            <Unapproved>boolean</Unapproved>
            <ShipToKey>string</ShipToKey>
            <FgnOrder>string</FgnOrder>
            <Comments>string</Comments>
            <RCOrderKey>string</RCOrderKey>
            <Recurring>boolean</Recurring>
            <LineNumber>long</LineNumber>
            <ProofLink>string</ProofLink>
            <Variables xsi:nil="true" />
            <ProductDetails xsi:nil="true" />
            <LineTaxPercent>decimal</LineTaxPercent>
            <ShippingHandlingTaxPercent>decimal</ShippingHandlingTaxPercent>
            <LineTaxAmount>decimal</LineTaxAmount>
          </OfferOrdered>
          <OfferOrdered>
            <Offer xsi:nil="true" />
            <Quantity>int</Quantity>
            <CanceledQuantity>int</CanceledQuantity>
            <OrderShipTo xsi:nil="true" />
            <OrderShipToKey xsi:nil="true" />
            <PriceType>unsignedByte</PriceType>
            <UnitPrice>decimal</UnitPrice>
            <ShipType>short</ShipType>
            <ShippingHandling>decimal</ShippingHandling>
            <Discounts>decimal</Discounts>
            <DiscountPercent>int</DiscountPercent>
            <DocumentID>string</DocumentID>
            <SeqID>int</SeqID>
            <CloneLine>int</CloneLine>
            <Unapproved>boolean</Unapproved>
            <ShipToKey>string</ShipToKey>
            <FgnOrder>string</FgnOrder>
            <Comments>string</Comments>
            <RCOrderKey>string</RCOrderKey>
            <Recurring>boolean</Recurring>
            <LineNumber>long</LineNumber>
            <ProofLink>string</ProofLink>
            <Variables xsi:nil="true" />
            <ProductDetails xsi:nil="true" />
            <LineTaxPercent>decimal</LineTaxPercent>
            <ShippingHandlingTaxPercent>decimal</ShippingHandlingTaxPercent>
            <LineTaxAmount>decimal</LineTaxAmount>
          </OfferOrdered>
        </Offers>
        <OrderRecurrenceSchedule>
          <RecurrenceSchedules>
            <SeqID>int</SeqID>
            <ID>string</ID>
            <Description>string</Description>
            <Definition>string</Definition>
            <DefinitionDetail>string</DefinitionDetail>
            <Schedule>EveryXDays or EveryXWeeks or EveryXMonths</Schedule>
            <ScheduleCount>int</ScheduleCount>
            <Cycle>Rolling or Custom</Cycle>
            <StartCycleDate>dateTime</StartCycleDate>
            <DaysToJoin>int</DaysToJoin>
            <MonthlyRecurrenceType>DayOfMonth or WeekOfMonthAndDayOfWeek</MonthlyRecurrenceType>
            <MinimumRecurrences>int</MinimumRecurrences>
            <MaximumRecurrences>int</MaximumRecurrences>
            <RecurrenceIncrement>int</RecurrenceIncrement>
            <AllowInfiniteRecurrence>boolean</AllowInfiniteRecurrence>
            <InfiniteTag>string</InfiniteTag>
            <DurationTag>string</DurationTag>
            <ExpirationDate>dateTime</ExpirationDate>
            <NextCycleDate>dateTime</NextCycleDate>
            <HasValidCycleDate>boolean</HasValidCycleDate>
            <AnyOffer>boolean</AnyOffer>
            <RecurrenceScheduleShippingOptions xsi:nil="true" />
          </RecurrenceSchedules>
          <RecurrenceOfferFlag>boolean</RecurrenceOfferFlag>
          <RecurrenceShippingOption>
            <Description>string</Description>
          </RecurrenceShippingOption>
          <RecurrenceSpecialHandlingCharge>decimal</RecurrenceSpecialHandlingCharge>
          <NumberRecurrence>int</NumberRecurrence>
        </OrderRecurrenceSchedule>
        <OrderBudget>
          <Person>
            <Name xsi:nil="true" />
            <CompanyInfo xsi:nil="true" />
            <Address xsi:nil="true" />
            <ContactInfo xsi:nil="true" />
            <BillingInfo xsi:nil="true" />
            <Variables xsi:nil="true" />
          </Person>
        </OrderBudget>
      </order>
    </AddOrder>
  </soap12:Body>
</soap12:Envelope>`;
function readOrderXMLs() {
    let xmlFileName = "./order/addorder-request-minimal.xml";
    xmlFileName = "./order/addorder-request-doc.xml";
    // Read the XML file
    fs.readFile(xmlFileName, "utf8", (err, xmlData) => {
        if (err) {
            console.error("Error reading XML file:", err);
            return;
        }
        // console.log(xmlData);
        // Parse the XML data
        const parser = new fast_xml_parser_1.XMLParser();
        // let jObj = parser.parse(sampleRequest);
        let jObj = parser.parse(xmlData);
        debugger;
        console.log(JSON.stringify(jObj));
    });
    /* const builder = new XMLBuilder();
    const xmlContent = builder.build(jObj);
    console.log(xmlContent); */
}
readOrderXMLs();
//# sourceMappingURL=../**/*.map/order/veracore-add-order-req.js.map