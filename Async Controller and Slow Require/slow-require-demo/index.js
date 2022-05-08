const express = require('express');
const app = express();
const port = process.env.PORT || 9990;



const logger = {
    info: console.log
}

const timer = (_mw) => {
    return (req, res, next) => {
        const start = new Date().getTime();
        _mw(req, res, () => {
            const end = new Date().getTime();
            logger.info(`Middleware ${_mw.name} took : ~${end - start}/ms`);
            next();
        });
    }
};

const mw1 = (req, res, next) => {
    console.log("Middleware1");
    next()
}

function x(req, res, next) {
    console.log("MiddlewareX");

    next()
}
const mw2 = (req, res, next) => {
    console.log("Middleware2");
    setTimeout(() => {
        next()
    }, 7000);

}

let mws = [mw1, mw2, x]
mws = mws.map(m => timer(m))

app.get('/', ...mws, (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//sudo dtruss -d -n 'node' > ./require.log 2>&1
