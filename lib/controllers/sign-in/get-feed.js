"use strict";

    var twit = require("twitter");
    var secret = include("secret");
    var twt = new twit(secret.keys);

    var number  =   1;

module.exports = function(app) {
    app.get("/get-feed", function(req, res) {

        twt.get('search/tweets', {q: '#nowplaying', count: number, geocode: "37.781157,-122.398720,10000mi"}, 
            function(error, tweets, response){
            res.send(tweets);
            });
        });
};
