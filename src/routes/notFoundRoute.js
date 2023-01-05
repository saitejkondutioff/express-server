"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/check', function (req, res) {
    res.send('I am ok');
});
app.listen(3000);
