let counter = 1;
const id = Math.floor(Math.random() * 100000)
console.log("I am The Only Logger in Your APP!!!")

module.exports = {
    log: (str) => {
        console.log(`[logger ${id} | line ${(counter++)}] : ${str}`)
    }
}