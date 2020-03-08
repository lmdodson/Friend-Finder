    friendList = require("../data/friends.js")
    // - GET route to display a JSON of all possible friends.
    module.exports = function (app) {
        app.get("/api/friends", function (req, res) {
            // display the friendList array in json format
            res.json(friendList);
        });

        // - POST routes `/api/friends`. handles incoming survey results and the compatibility logic.
        app.post("/api/friends", function (req, res) {
            // grab the users answers
            var newFriend = req.body
            userScores = newFriend.scores
            // convert the answers to integers
            for (var i = 0; i < userScores.length; i++) {
                userScores[i] = parseInt(userScores[i]);
            }

            // set up the friend match
            var matchName = "";
            var matchPic = "";
            var totalDifference = 1000;

            // for each friend in the friend list
            for (var i = 0; i < friendList.length; i++) {
                // start at 0
                var diff = 0;
                // and for each answer provided
                for (var j = 0; j < userScores.length; j++) {
                    diff += Math.abs(friendList[i].scores[j] - userScores[j])
                }

                if (diff < totalDifference) {
                    totalDifference = diff;
                    matchName = friendList[i].name;
                    matchPic = friendList[i].photo;
                    console.log(matchName)
                }
            }


            friendList.push(newFriend)
        });
    }