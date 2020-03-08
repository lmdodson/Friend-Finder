// Dependencies
var express = require("express");
var path = require("path");

// set up Express
var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// link the html and api routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// confirm and show the port
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});