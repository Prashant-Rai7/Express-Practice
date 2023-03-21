const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is NOt Routing!')
})

app.route("/about").get((req, res) => {
    res.send('This is a Routing')
  })

app.listen(port, () => {
  console.log(`Connected on http://localhost:${port}`)
})