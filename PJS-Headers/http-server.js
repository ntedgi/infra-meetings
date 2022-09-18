const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 9990;
let counter = 0;
const seprator = () => console.log(`(🚀) REQ ${counter++} -------------------------------------------`)

app.get('/', (req, res) => {
    seprator();
    console.log(req.headers)
    res.status(200);
    res.send({ sucess: true });
});

app.get('/page', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/iframe-page', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index-with-iframe.html'));
  });


const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`server.keepAliveTimeout | ${server.keepAliveTimeout}`)
    console.log(`server.headersTimeout | ${server.headersTimeout}`)
});


const timeout = 10000;
const seed = 20;
server.keepAliveTimeout = timeout;
server.headersTimeout = timeout + seed;