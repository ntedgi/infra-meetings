const { Readable } = require("stream")

class MyStream extends Readable {
    constructor(options = {}) {
        super(options)
        this.c = 97;
    }

    _read() {
        this.push(`${String.fromCharCode(this.c++)}\n`);
        if (this.c > 'z'.charCodeAt(0)) this.push(null);
    };

}

const ms = new MyStream();
ms.pipe(process.stdout)