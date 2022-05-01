const express = require('express')
const app = express()
const port = 12000
let countDown = 500
let timeout = countDown * 1000

const fire = () => {
  return Array(10).fill(0).map(e => `
  🔥💥🔥💥🔥💥💣  🔥💥🔥💥🔥💥  💣🔥💥🔥💥🔥💥
  🔥💥🔥💥🔥💥💣    Kaboom!   💣🔥💥🔥💥🔥💥
  🔥💥🔥💥🔥💥💣              💣🔥💥🔥💥🔥💥
  🔥💥🔥💥🔥💥💣  🔥💥🔥💥🔥💥  💣🔥💥🔥💥🔥💥
  `).join("")
}

setTimeout(() => {
  throw new Error(fire())
}, timeout)

setInterval(() => {
  console.log(`Going Down in | ${countDown}`)
  countDown = countDown - 1
}, 1000)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
