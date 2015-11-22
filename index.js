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



// "use strict";


// 	var twit = require("twitter");


// 	var twitter = new twit({
//     "consumer_key": "CXVNsTDohsJaIxl0cjpuLKXYr",
//     "consumer_secret": "Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB",
//     "access_token_key": "2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd",
//     "access_token_secret": "SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT"
// 	});

// 	var number 	= 	5;
// 	var	util 	=	require('util')





// twitter.stream('statuses/filter', {track: 'hello'}, function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });
 
//   stream.on('error', function(error) {
//     throw error;
//   });
// });



// twitter.get('search/tweets', {q: '#nowplaying', count: number, geocode: "37.781157,-122.398720,10000mi"}, function(error, tweets, response){
//    console.log(tweets);
// });





