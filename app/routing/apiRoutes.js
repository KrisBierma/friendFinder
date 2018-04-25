//for the data - what the user sees and can post
var allUsers = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(allUsers);
    });

    app.post("/api/friends", function(req, res){
            var currentUser = req.body; //current user's scores
            var lowScore=40;
            var friend="";

            //cycle through arrays of other users 
            for (var i=0; i<allUsers.length; i++){
                var score=0;

                //compare array to arrays of other users
                for (var j=0; j<10; j++){
                    var diff = Math.abs(parseInt(allUsers[i].scores[j])-parseInt(currentUser.scores[j]));
                    score+=diff; //tally of difference between all scores
                }
                // console.log("--------score, name------------");
                // console.log(score, allUsers[i].name);
                
                //hold current user in temp var until closer match is found
                if (score < lowScore){
                    lowScore=score;
                    friend=allUsers[i];
                    // console.log("--------low score, friend name------------");
                    // console.log(lowScore, friend);
                }
            }
            allUsers.push(req.body);
            res.json(friend);

    }); //end post
};