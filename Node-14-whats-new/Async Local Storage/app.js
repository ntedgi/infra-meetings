const { withStore } = require('./store.js')
const { someService } = require('./storeConsumer.js')
const express = require('express')
const app = express()
const port = 12001


function myMiddleware(req, res, next) {
  const store = {
    id: Math.random(),
    name: "naor"
  }
  withStore(store, next)
};


function randomMiddleWare(req, res, next) {
  next()
}

app.use(myMiddleware)

app.use(randomMiddleWare)

app.get('/', (req, res) => {
  someService()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
