import { createReadStream } from 'fs'
const filePath = './users.csv'
const file = createReadStream(filePath, { encoding: 'utf8' })
let counter = 0

file.on('data', chunk => {
    console.log(chunk)
    counter++
})

file.on('end', () => console.log(`Finish reading all file ${filePath} total chunks ${counter}`))
file.on('error', err => console.error(`Error reading file: ${err}`))
