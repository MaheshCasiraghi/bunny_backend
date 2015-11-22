"use strict";

    var twit = require("twitter");
    var secret = {
      "keys": {
        "consumer_key": "CXVNsTDohsJaIxl0cjpuLKXYr",
        "consumer_secret": "Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB",
        "access_token_key": "2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd",
        "access_token_secret": "SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT"
        }
    }
    var twt = new twit(secret.keys);

    var number  =  5;

module.exports = function(app) {
    app.get("/get-feed", function(req, res) {

        var locationString = req.query.lat + "," + req.query.lon + ",100000km";

        twt.get('search/tweets', 
            {q: "#nowplaying", count: number, geocode: locationString, result_type: "recent"}, 
            function(error, tweets, response){
                res.send(tweets);
            });
        });
};
