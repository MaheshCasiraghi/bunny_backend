"use strict";

    var twit = require("twitter");
    var secret = include("secret");
    var twt = new twit(secret.keys);


module.exports = function(app) {
    app.get("/post-tweet", function(req, res) {

	twt.post('statuses/update', {status: 'Trying to post #'},  
		function(error, tweet, response){
			res.send(error)

	//   if(error) throw error;
	//   console.log(tweet);  // Tweet body. 
	//   console.log(response);  // Raw response object. 
	// });
	});
})
};


