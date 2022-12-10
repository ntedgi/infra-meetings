const express = require('express')
require('heapdump')
const app = express()
const port = 3000


const memLeak = [];
const randInt = (max) => Math.floor(Math.random() * max);
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

setInterval(() => {
    let items = randInt(10);
    while (items > 0) {
        memLeak.push(items)
        items-=1;
    }
    console.log("leaking....💦💧💧💦💧💦")
}, 1000)