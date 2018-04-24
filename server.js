var bodyParser = require('body-parser'); //get info back in JSON form
var express = require('express'); //makes routing easy
var app = express(); //easily call express
var PORT = process.env.PORT || 8080;
// var path = require("path");
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});


