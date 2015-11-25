NODE BUNNY CHALLENGE BACKEND
=============

This is a simple node backend APP that provides twitter API oauth 1.1 functionality by exposing the following 2 routes: 

0. https://bunnybackend.herokuapp.com/get-feed?lat=[latitude]&lon=[longitude] 
0. https://bunnybackend.herokuapp.com/post-tweet?video=[video]&comment=[comment] 

to be consumed by [the bunny challenge frontend app](http://www.seedfounder.com).

Stack
-------

The App makes use of simple Node/Express boilerplate, with the folllowing libraries: 

* BLUEBIRD for advanced promises functionalities.
* CORS to enable headers management for cross domain API requests.
* LODASH for convenient javascript object manipulation.
* NODE-TWITTER-API and TWITTER as two libraries for twitter connection. Libraries' functionalities partially overlap, both are included since their functionings do not clash, and flexibility was a priority for rapid prototypization. 

Installation
-----------

```
$ git clone [REPOSITORY]
```

```
$ (sudo) npm install
```

Usage
-----

```
$ node index
```

Or, if heroku toolbelt is installed:

```ruby
$ heroku local web
```

Contributing
------------

https://github.com/chrisharrington/node-twitter-sign-in-example