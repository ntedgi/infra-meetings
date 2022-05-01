import { Transform, Readable, Writable } from 'readable-stream'

class CharStream extends Readable {
    constructor(options = {}) {
        super(options)
        this.charCode = 97;
    }
    _read() {
        this.push(`${String.fromCharCode(this.charCode++)}\n`);
        if (this.charCode > 'z'.charCodeAt(0)) this.push(null);
    };
}

class Uppercasify extends Transform {
    _transform(chunk, encoding, done) {
        this.push(chunk.toString().toUpperCase())
        done()
    }
}

class StringWritable extends Writable {
    constructor(options = {}) {
        super(options)
        this.currentString = "";
    }
    _write(chunk, encoding, done) {
        this.currentString += chunk.toString().replace("\n", "")
        done()
    }
}



const cs = new CharStream()
const uts = new Uppercasify()
const out = new StringWritable()
const stream = cs.pipe(uts).pipe(out)
stream.on('finish', () => console.log(out.currentString))