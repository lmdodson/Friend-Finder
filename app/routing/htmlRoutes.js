// - A GET Route to `/survey` which should display the survey page.
// - A default, catch-all route that leads to `home.html` which displays the home page.

var path = require("path");

module.exports = function (app) {
    // route to direct user to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../survey.html"));
    });
    // catch-all route that leads to home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });
};