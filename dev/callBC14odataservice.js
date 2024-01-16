const request = require('request');
const ntlm = require('httpntlm');
const options = {
    url: "https://hp-bcprod.hemlock.com:14068/Hemlock-BC14-WEB/ODataV4/Company('Hemlock')/zzPvShipmentList?$filter=contains(Optional_Field_5,%273_In_ProShip%27)&$top=10",
    username: 'alaxu',
    password: '',
    workstation: '',
    domain: 'HEMLOCK'
};

try {
    console.log('Trying to make a get request to BC14');
    ntlm.get(options, function (err, res) {
        if (err) {
            console.error(err);
            return false;
        }
        console.log(res);
        console.log(res.body);
    });
}
catch (error) {
    console.error(error);
}