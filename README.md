# Steps to convert XML to JSON

- Install fast-xml-parser
- npm install fast-xml-parser
- Read the file using below typescript code and convert it to JSON

```typescript
import * as fs from "fs";
import { parse } from "fast-xml-parser";

const xml = fs.readFileSync("sampleXMLRequest.xml", "utf8");
const json = parse(xml);
console.log(JSON.stringify(json, null, 2));
```
