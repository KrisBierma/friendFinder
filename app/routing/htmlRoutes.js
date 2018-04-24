//directs the user

var path = require("path");

module.exports = function(app){
    console.log(__dirname);
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname+"/../public/home.html"));
    });
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname+"/../public/survey.html"));
    });
    // app.get("/friends")
}