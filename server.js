// server.js
var express = require('express'),
path = require('path'),
app = express(),
port = 4444,
bodyParser = require('body-parser');

var fs = require('fs');

// Make sure to include the JSX transpiler
require('node-jsx').install();

// database connection
var mongoose  = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products');

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes for the application
//require('./app/routes/core-routes.js')(app);
//dynamically include routes (Controller)
fs.readdirSync('./app/controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./app/controllers/' + file);
      route.controller(app);
  }
});

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
