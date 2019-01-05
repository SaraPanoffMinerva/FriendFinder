var friends = require("../data/friends.js");

module.exports = function (app) {

        app.get("/api/friends", function(req, res){
            res.json(friends);
        });

        app.post("/api/friends", function(req, res){
            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: 1000
            };

        console.log(req.body)
        
        var userData = req.body;
        var userScores = userData.scores;
        
        //this variable will calculate the difference between the user and users in database

        var totalDifference = 0;
        

        //we loop through the friend possibilities in database
        for (var i = 0; i < friends.length; i++){
            console.log (friends[i].name);
            totalDifference = 0;
        }

        //we loop through all the scores of each friend
        for (var j = 0; j < friends[i].scores[j]; j++){

            //we calculate the difference between the scores

        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        
        if (totalDifference <= bestMatch.friendDifference) {

            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
        }
    
        friends.push(userData);


        //returns a JSON with user's bestMatch
        res.json(bestMatch);
        });

}