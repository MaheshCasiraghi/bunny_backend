"use strict";

// Include Lodash for supercool utils functionalility
var _ = require("lodash");

// Avoid that heroku free tier goes to sleep.
 var http = require("http");
setInterval(function() {
    http.get("http://bunnybackend.herokuapp.com/get-feed");
}, 300000); 


// Include the 2 separate controllers, for the 2 routes

module.exports = function(app) {
    _.each([
        "post-tweet",
        "get-feed"
    ], function(controller) {
        require("./sign-in/" + controller)(app);
    });
};
