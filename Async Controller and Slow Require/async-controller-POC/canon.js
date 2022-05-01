const http = require('http');

const requests = 10000;
async function getData() {
    const arr = new Array(requests).fill(null).map(it => http.get('http://localhost:9990/'))
    await Promise.all(arr).then(() => console.log('done'));
}
getData()