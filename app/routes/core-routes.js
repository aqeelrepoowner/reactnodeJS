var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp'));
LoginApp = React.createFactory(require('../components/Login'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
    // and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
		// console.log(myAppHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

	app.get('/login', function(req, res){
		// React.renderToString takes your component
    // and generates the markup
		var reactHtml = React.renderToString(LoginApp({}));
    // Output html rendered by react
		// console.log(myAppHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

};
