const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 2300;



app.get("/", (req, res) => {
    const data = fs.readFile("src/fakedata.json", "utf-8", (err, data) => {
        console.log(data);
        res.json(data);
      });
});


app.listen(PORT, () => {
  console.log(`Connected on http://localhost:${PORT}`);
});