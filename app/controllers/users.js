var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp'));
var mongoose = require('mongoose')
var users = require('../models/usersModel');
require('node-jsx').install();

module.exports.controller = function(app) {

    function responseStr(err, Res) {
        console.log(Res);
    }

    app.get('/', function(req, res) {
        res.send("Its working");    
    });

/**
 * a home page route
 */
  app.get('/signup', function(req, res) {
    var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
		//console.log(reactHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
      //console.log(users);
        users.schema.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
     // res.send("in signup");
      // any logic goes here
     // res.json('users/signup')
  });

/**
 * About page route
 */
  app.get('/login', function(req, res) {
      res.send("in login");
      // any logic goes here
     // res.json('users/login')
  });

  app.get('/users', function (req, res) {
       if (req.query.email) {
           var results =  users.findByEmail(req.query.email);
           console.log(results);
           /* if(results.err)
                res.send(err);

            res.send(results);*/
       }
  });
}