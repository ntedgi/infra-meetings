const http = require('http');
http.get('http://localhost:9990/', (res) => {
    console.log('Got response: ' + res.statusCode);
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    console.log('Http Connection Aborted');
}
).on('error', (e) => { })