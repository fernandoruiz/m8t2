var express = require('express')
var speakeasy = require("speakeasy");
var QRCode = require('qrcode');
var cors = require('cors')

var app = express();
app.use(cors());

const options = {
    issuer: `M2T8`,
    name: `M2T8 (fernandotic79@gmail.com)`,
    length: 64
}
var secret = speakeasy.generateSecret(options);

app.get('/', function (req, res) {
    //using speakeasy to generate one time token.
    var token = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32',
    });

    QRCode.toDataURL(secret.otpauth_url, function (err, data_url) {
        console.log(data_url); // A data URI for the QR code image
        res.send(data_url);
    });
});

//Verify TOTP
app.post('/verify', function(req, res) {
    var token = req.headers.token; // for testing I am just sending token to front-end. send this token with /verify POST request
    // Verify a given token
    var tokenValidates = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: token,  //token is what created in get('/') request
        window: 6
    });
    res.send(tokenValidates);
    // Returns true if the token matches
});

app.listen(3000);
console.log('server running on port 3000');