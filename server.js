const express = require('express');
var http = require("http");

const app = express()
const PORT = 8081;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST,OPTIONS, PUT, DELETE");
    res.header('Access-Control-Allow-Credentials', true);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
app.use(express.static(__dirname + '/'))
app.listen(PORT, _ => console.log('Server running at http://127.0.0.1:8081/'))