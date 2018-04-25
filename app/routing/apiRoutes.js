//for the data - what the user sees and can post

var allUsers = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(allUsers);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body);
        console.log(req.body.scores);
        console.log(req.body.scores[0]);
        console.log(allUsers);
        // console.log(allUsers[0]);
        // console.log(res.json);
        // function compareArrays(){
            var currentUser = req.body;
            console.log(currentUser);
            console.log(currentUser.scores);
            //cycle through other arrays
            var highScore=-1;
            var friend="";
            for (var i=0; i<allUsers.length; i++){
                var score=0;
                for (var j=0; j<10; j++){
                    // console.log(allUsers[i], allUsers[i].scores[j]);
                    var diff = Math.abs(parseInt(allUsers[i].scores[j])-parseInt(currentUser.scores[j]));
                    score+=diff; 
                }
                if (score > highScore){
                    highScore=score;
                    friend=allUsers[i];
                }
            }
            console.log("Your friend is: "+friend);
            // console.log(req);


            //compare array to arrays of other users
                //calculate totalDifference 
                //hold current user in temp var until closer match is found
        // }

    }); //end post
};