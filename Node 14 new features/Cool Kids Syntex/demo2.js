console.log("Optional chaining operator  (?.) ")
console.log("##################################")

const users = [{ name: 'Alice', cat: { name: 'Dinah' } }, { name: 'Emma' }]


function printUserCatName1(user) {
    if (user !== null && user != undefined && user.cat && user.cat.name) {
        console.log(user.cat.name)
    }
}

function printUserCatName2(user) {
    if (user?.cat?.name) {
        console.log(`my cat Name is ${user.cat.name}`)
    }
}

//  more usage examples:
//  functions
let result = someInterface.customMethod?.();
//  arrays
let arrayItem = arr?.[42];
//  objects
let nestedProp = obj?.['prop' + 'Name'];



users.forEach(user => {
    console.log(user.name)
    printUserCatName2(user)
    console.log("**************")
})

