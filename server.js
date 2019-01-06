var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 7000;

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }))

// parse various different custom JSON types as JSON
app.use(bodyParser.json());
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("app listening on PORT:" + PORT);

});