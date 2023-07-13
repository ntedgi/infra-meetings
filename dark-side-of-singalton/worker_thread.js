const { Worker } = require("worker_threads");


for (let i = 0; i < 10; i++) {
    new Worker(
        __dirname + "/get-large-prime.js",
        {
            workerData: {
            }
        }
    );
}