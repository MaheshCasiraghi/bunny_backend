"use strict";

var _ = require("lodash");

module.exports = function(app) {
    _.each([
        "post-tweet",
        "get-feed"
    ], function(controller) {
        require("./sign-in/" + controller)(app);
    });
};
