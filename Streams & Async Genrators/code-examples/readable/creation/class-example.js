import { Readable } from "readable-stream";

export class CharStream extends Readable {
    constructor(options = {}) {
        super(options)
        this.charCode = 97;
    }

    _read() {
        this.push(`${String.fromCharCode(this.charCode++)}\n`);
        if (this.charCode > 'z'.charCodeAt(0)) this.push(null);
    };

}

const ms = new CharStream();
ms.pipe(process.stdout)