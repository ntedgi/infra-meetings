const fs = require('fs');
const https = require('https');
const express = require('express');
const certificateDir = './sslcert'
const privateKey  = fs.readFileSync(`${certificateDir}/key.pem`, 'utf8');
const certificate = fs.readFileSync(`${certificateDir}/cert.pem`, 'utf8');
const credentials = {key: privateKey, cert: certificate};
const app = express();
const port = process.env.PORT || 9990;

const httpsServer = https.createServer(credentials, app);

let counter = 0;
const seprator = () => console.log(`(🚀) REQ ${counter++} -------------------------------------------`)

app.get("*", function (req, res, next) {
    if ("https" !== req.headers["x-forwarded-proto"]) {
        res.redirect("https://" + req.hostname + req.url);
    } else {
        next();
    }

});

app.get('/', (req, res) => {
    seprator();
    console.log(req.headers)
    res.status(200);
    res.send({ sucess: true });
});

const server = httpsServer.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`server.keepAliveTimeout | ${server.keepAliveTimeout}`)
    console.log(`server.headersTimeout | ${server.headersTimeout}`)
});


const timeout = 10000;
const seed = 20;
server.keepAliveTimeout = timeout;
server.headersTimeout = timeout + seed;