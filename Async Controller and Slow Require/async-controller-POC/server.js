const express = require('express');
const app = express();
const port = process.env.PORT || 9990;

async function err_async(req, res) {
    throw new Error('Error');
    res.send('Hello World!');
}
function err_sync(req, res) {
    throw new Error('Error');
    res.send('Hello World!');
}
app.get('/', (req, res) => {
    err_async(req, res);
});

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

setInterval(() => {
    server.getConnections(function (err, count) {
        console.log('Open Connections: ' + count);
    });
}, 3000);
