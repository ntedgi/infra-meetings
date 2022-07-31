const { setTimeout } = require('timers/promises')
async function normalTimer(){
    console.time("normalTimer")
    await setTimeout(1000);
    console.timeEnd("normalTimer")
}
normalTimer();