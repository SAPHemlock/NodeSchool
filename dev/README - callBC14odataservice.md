 # Hemlock BC14 API GET Request with NTLM Authentication

This Node.js script demonstrates how to make a GET request to the Hemlock BC14 API using NTLM authentication. The script uses the `request` and `httpntlm` modules to make the request and handle the NTLM authentication.

## Prerequisites

Before you can run this script, you will need to have the following installed:

* Node.js
* The `request` module
* The `httpntlm` module

You can install the `request` and `httpntlm` modules using the following commands:

```
npm install request
npm install httpntlm
```

## Usage

To use this script, you will need to provide the following information:

* The URL of the API endpoint you want to access
* Your username and password for the API
* The workstation you are using to access the API
* The domain you are using to access the API

You can provide this information by setting the following environment variables:

* `API_URL`
* `API_USERNAME`
* `API_PASSWORD`
* `API_WORKSTATION`
* `API_DOMAIN`

For example, you could set these environment variables using the following commands:

```
export API_URL="https://hp-bcprod.hemlock.com:14068/Hemlock-BC14-WEB/ODataV4/Company('Hemlock')/zzPvShipmentList?$filter=contains(Optional_Field_5,%273_In_ProShip%27)&$top=10"
export API_USERNAME="alaxu"
export API_PASSWORD=""
export API_WORKSTATION=""
export API_DOMAIN="HEMLOCK"
```

Once you have set the environment variables, you can run the script using the following command:

```
node index.js
```

## Code Explanation

The script starts by importing the `request` and `httpntlm` modules.

```javascript
const request = require('request');
const ntlm = require('httpntlm');
```

Next, the script defines the options for the GET request. The options include the URL of the API endpoint, the username and password for the API, the workstation you are using to access the API, and the domain you are using to access the API.

