const express = require('express');
const app = express();
const port = process.env.PORT || 9990;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//sudo dtruss -d -n 'node' > ./require.log 2>&1
