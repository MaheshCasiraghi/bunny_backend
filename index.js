"use strict";

require("./lib/globals");

var express = require("express"),
	cors = require('cors'),
	controllers = include("controllers");

var app = express();


app.use(cors());

controllers(app);

app.listen((process.env.PORT || 5000), function () {
	console.log("Listening on " + (process.env.PORT || 5000) + "...");
});






