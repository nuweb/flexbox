var express = require('express');

var app = express();

// Serve static files
app.use('/', express.static(__dirname + '/'));

// Serve application API

app.listen(2222);

console.log('Listening on port 2222...');