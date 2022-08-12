const { setTimeout } = require('timers/promises')
async function sleep(ms){
    await setTimeout(ms);
}
normalTimer();

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, ms)
    })
}