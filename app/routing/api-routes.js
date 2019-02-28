var friends = require("../data/friends.js");
var path = require("path")



module.exports = function (app) {

        app.get("/api/friends", function(req, res){
            res.json(friends);
            console.log(friends)
        });
//magic happens here - Chad
        app.post("/api/friends", function(req, res){
           console.log("hello")
            console.log(req.body)
            friends.push(req.body)
            
            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: 1000
            };

        console.log(req.body)
        
        
        res.json("this is your best frient" + bestMatch);
        });

}