const express = require('express')
const app = express()
const port = 48230


function verySlowFunction(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(obj.id)
        }, 3000)
    })

}
verySlowFunction = mapMemoizer(verySlowFunction)

const {verySlowFunction} = require("./util")

function mapMemoizer(fn) {
    const cache = new Map()
    return async function(arg) {
        const key = JSON.stringify(arg)
        if (!cache.has(key)) {
            cache.set(key, await fn(arg))
        }
        return cache.get(arg);
    };
}

function weakMapMemoizer(fn) {
    const cache = new WeakMap()
    return async function(arg) {
        const key = arg;
        if (!cache.has(key)) {
            cache.set(key, await fn(key))
        }
        return cache.get(key);
    }
}


const memoizedVerySlowFunction = weakMapMemoizer(verySlowFunction)

app.get('/:id', async (req, res) => {
    const obj = { a: req.params.id }
    console.time('first execution!')
    const result1 = await memoizedVerySlowFunction(obj)
    console.timeEnd('first execution!')
    console.time('second execution!')
    const result2 = await memoizedVerySlowFunction(obj)
    console.timeEnd('second execution!')
    console.log(result1 === result2)
    res.send(obj)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


