    friendList = require("../data/friends.js")
    // - GET route to display a JSON of all possible friends.
    module.exports = function (app) {
        app.get("/api/friends", function (req, res) {
            res.json(friendList);
        });

        // - POST routes `/api/friends`. handles incoming survey results and the compatibility logic.
        app.post("/api/friends", function (req, res) {
            var newFriend = req.body
            friendList.push(newFriend)
        });
    }