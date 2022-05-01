import { Transform, Readable } from 'readable-stream'

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

const cs = new CharStream()
const uts = new Uppercasify()
cs.pipe(uts).pipe(process.stdout)