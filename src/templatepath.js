const express = require('express')
const path =  require("path")
const app = express()
const port = 3000

const staticPath = path.join(__dirname, "../views")
const templatepath = path.join(__dirname, "../templates")


app.set('view engine', "hbs")
app.set('views', templatepath)
app.get("", (req,res) => {
    res.render("index")
})

app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.send('HI its working!')
})

app.get("/about", (req,res) => {
    res.render("about.hbs")
} )


app.listen(port, () => {
  console.log(`Connected on http://localhost:${port}`)
})