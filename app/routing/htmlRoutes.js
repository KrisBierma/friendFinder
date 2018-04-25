//directs the user
var path = require("path");

module.exports = function(app){
   
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname+"/../public/home.html"));
    });
    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname+"/../public/survey.html"));
    });
    
    //directs to home page if not specified /home or /survey
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}