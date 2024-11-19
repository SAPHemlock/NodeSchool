const fs = require('fs');

// Read the log file (assuming it's named 'logfile.txt')
const logfile = "D:/Delete/PWXMPieShippingServer/Logs.txt";

// Read the entire file into an array of lines
const lines = fs.readFileSync(logfile, 'utf-8').split('\n');

// Initialize an array to store order IDs
const orderIds = [];

// Step 1: Extract Order IDs
for (const line of lines) {
    if (line.includes('Could not submit shipping info to uStore for PW Order:')) {
        const orderId = line.split('PW Order: ')[1];
        orderIds.push(orderId);
        console.log(orderId);
    }
}

return;
// Step 2: Search for XML Request Nodes
for (const line of lines) {
    if (line.includes('<SOAP-ENV:Envelope')) {
        // Log the line with console.error
        console.error(line);
    }
}
