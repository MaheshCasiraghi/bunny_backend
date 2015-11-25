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

//Expose the POST-TWEET API

module.exports = function(app) {
    app.get("/post-tweet", function(req, res) {

    var postText = (req.query.comment || "") + " " + (req.query.video || "") + " #nowplaying";

	twt.post('statuses/update', {status: postText},  
		function(error, tweet, response){
			res.send(error)
		  	console.log(tweet);
			console.log(response);
	});
})
};


