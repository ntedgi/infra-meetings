const { Readable } = require("stream")
const read = new Readable;

for (let i = 97; i <= 122; i++) {
    read.push(`${String.fromCharCode(i)}\n`);
}
read.push(null)
read.pipe(process.stdout)
