//for the data - what the user sees and can post

var allUsers = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(allUsers);
    });

    app.post("/api/friends", function(res, req){
        

    }); //end post
};