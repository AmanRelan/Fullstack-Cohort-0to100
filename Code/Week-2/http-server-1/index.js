const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
app.use(bodyParser.json());

let todos = [];
//create a todos app that lets users store todos on the server
app.get('/', function (req, res) {
    res.send("Hello World! Something has changed!");
});

app.post('/', function (req, res) {
    console.log(req.body);
    res.send("Hello World");
});

app.listen(port, function () {
    console.log(`Application listening on port ${port}`)
});