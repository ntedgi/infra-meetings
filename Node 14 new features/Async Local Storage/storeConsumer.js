
const {getStore} = require('./store.js')

function someService(){
    console.log("doing some work.....")
    const store = getStore()
    console.log(store)
}

module.exports={
    someService
}