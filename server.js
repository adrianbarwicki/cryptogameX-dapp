var express = require('express');
var app = express();
var path = require("path");

app.get('/bundled.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/bundled.js'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'), function(err) {
        if (err) {
        res.status(500).send(err)
        }
    });
});

app.listen(8080, () => {
    console.log("listening at 8080");
});