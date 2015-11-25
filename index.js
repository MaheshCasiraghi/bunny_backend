"use strict";
//INCLUDE LIBRARIES
require("./lib/globals");

//REQUIRE EXPRESS, CORS LIBRARY FOR CROSSDOMAIN REQUEST HEADERS, AND INCLUDE CONTROLLERS CODE
var express = require("express"),
	cors = require('cors'),
	controllers = include("controllers");

//INSTANTIATE EXPREESS
var app = express();

//INITIALIZE CORS
app.use(cors());

//INSTANTIATE CONTROLLERS
controllers(app);

//FIREUP NODE ON PORT 5000(local), or HEROKU ASSIGNED PORT
app.listen((process.env.PORT || 5000), function () {
	console.log("Listening on " + (process.env.PORT || 5000) + "...");
});






