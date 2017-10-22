var express = require('express');
var app = express();

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(1337, function() {
    console.log('Map is listening on port 1337');
});
