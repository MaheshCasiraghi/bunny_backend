"use strict";


// ENABLE DIFFERENT OAUTH SIGNIN CONTROLLER WISE FOR FLEXIBILITY
var secret = {
      "keys": {
        "consumer_key": "CXVNsTDohsJaIxl0cjpuLKXYr",
        "consumer_secret": "Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB",
        "access_token_key": "2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd",
        "access_token_secret": "SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT"
        }
}

// INSTANTIATE TWITTER OAUTH CONNECTION OBJECT
var twit = require("twitter");
var twt = new twit(secret.keys);
// number of twets to fetch
var number  =  20;

//Expose the GET-FEED API

module.exports = function(app) {
    app.get("/get-feed", function(req, res) {

        var locationString = req.query.lat + "," + req.query.lon + ",10000km";

        twt.get('search/tweets', 
            // {q: "youtube.com", count: number, geocode: locationString, result_type: "recent"}, 
            {q: "#nowplaying youtube.com/", count: number, geocode: locationString, result_type: "recent"}, 
            function(error, tweets, response){
                res.send(tweets);
            }
        );

        //ATTEMPT WITH STREAMING API, we'd need firehose power twitter functionalities }

            // twt.stream('statuses/filter', {track: '#nowplaying', location: req.query.lat + '' + req.query.lon}, 
        //     function(stream) {
        //       stream.on('data', function(tweet) {
        //         res.send(tweet);
        //         stream.destroy();
        //         // process.exit(0);
        //         // console.log(tweet);
        //       });
         
        //       stream.on('error', function(error) {
        //         throw error;
        //       });
        //     }
        // );


    });
};
