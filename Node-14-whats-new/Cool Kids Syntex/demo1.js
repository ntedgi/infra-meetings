// V8 upgrades


const NanExample = false

console.log("Nullish Coalescing  (??) ")
console.log("##########################")


// before node 14
const someInitWithDeafult1 = (value) => {
    return value || "Deafult Value";
}

// after node 14
const someInitWithDeafult2 = (value) => {
    return value ?? "Deafult Value";
}


const f1AsArtring = `
    const someInitWithDeafult = (value) => {
        return value || "Deafult Value";
    }
`

const f2AsArtring = `
    const someInitWithDeafult = (value) => {
        return value ?? "Deafult Value";
    }
`

const expectedResult = () => {

    const result = {}
    result[""] = (val) => { return val != "" ? "❌" : "✅" }
    result[0] = (val) => { return val != 0 ? "❌" : "✅" }
    result[NaN] = (val) => { return typeof val === 'string' ? "❌" : "✅" }
    result[null] = (val) => { return val != null ? "✅" : "❌" }
    result[undefined] = (val) => { return val != undefined ? "✅" : "❌" }
    return result
}

const nestyValues = ["", 0, NaN, null, undefined]

const runFunctionOnValues = (fn, values, operator, functionAsStr) => {

    console.log(functionAsStr)
    const expectedResults = expectedResult()
    console.log(`\nRunning values with ${operator}\n`)
    values.forEach(element => {
        const result = fn(element)
        console.log(`${expectedResults[element](result)}|Fn value for ${element} ==> ${result}`)
    });
    console.log(`\n\n`)
}

if (!NanExample)
    runFunctionOnValues(someInitWithDeafult1, nestyValues, "||", f1AsArtring)


runFunctionOnValues(someInitWithDeafult2, nestyValues, "??", f2AsArtring)


    //https://medium.com/engineering-housing/nan-is-not-equal-to-nan-771321379694 
    // NaN!=NaN ??!?

    //Short Story: According to IEEE 754 specifications any operation 
    //performed on NaN values should yield a false value or should raise an error.