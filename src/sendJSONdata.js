const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World! using HTML tag</h1"); // used for single tags.
    res.send({ name: "Prashant Rai", Age: 21 });
    res.write(); //used for adding multiple tags at a time.
    res.send(); //need to be write after the res.write() so that it will stop loading or waiting for another tags.
});

app.get("/temp", (req, res) => {
    res.send(
        { name: "Prashant Rai", Age: 21 , dob:" 10/05/2001"},
    );
    res.send()
});

app.listen(port, () => {
    console.log(`Connected on http://localhost:${port}`);
});
