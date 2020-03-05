// Dependencies
var express = require("express");
var path = require("path");

// set up Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());