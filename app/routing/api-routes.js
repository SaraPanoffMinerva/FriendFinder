var friends = require("../data/friends.js");
var path = require("path")

module.exports = function (app) {

        app.get("/api/friends", function(req, res){
            res.json(friends);
        });
//magic happens here - Chad
        app.post("/api/friends", function(req, res){
            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: 1000
            };

        console.log(req.body)
        
        
        res.json(req.body);
        });

}