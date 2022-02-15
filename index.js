var express = require('express');
var app = express();

app.use('/test',express.static('contents'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/add", (req, res) => 
{ 
    res.send("Hi World");
});

app.post("/", (req, res) => {
    res.send("POST World");
});



app.listen(3000);