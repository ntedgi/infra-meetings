// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();



// const a = () => {
//     console.log("call a")
// }
// function b() {
//     console.log("call b")
// }

// eventEmitter.on("a", a)
// eventEmitter.removeListener("a", b)
// eventEmitter.emit("a")

const {createReadStream } = require('fs')
const stream = createReadStream("./readme.txt")
stream.on("error",()=>{

})
stream.removeListener