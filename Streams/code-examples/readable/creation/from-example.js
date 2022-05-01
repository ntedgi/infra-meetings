const { Readable } = require('stream');

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const readableStream = Readable.from(alphabet);
readableStream.on('data', (chunk) => {
    console.log(chunk);

});