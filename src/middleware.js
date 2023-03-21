const express = require('express')
const path =  require("path")
const app = express()
const port = 3000



// const staticPath = path.join(__dirname, "../public")
const staticPath = path.join(__dirname, "hello.txt")

app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.send('HI its working!')
})

app.listen(port, () => {
  console.log(`Connected on http://localhost:${port}`)
})