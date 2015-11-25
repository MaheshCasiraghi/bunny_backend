"use strict";


// MAKE DIRS VISIBLE TO NODE AND EXPRESS
global.include = function(location) {
	return require(__dirname + "/" + location);
};
