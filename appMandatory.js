var express = require('express');
var app = express();

var libAbout = require('./lib/about.json');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', {
		title: "Mandatory Assignment",
		subtitle: "Express and",
		text: " ejs",
		author: "Made by Lord Ni"
	});
});

app.get('/about', function(req, res) {
	res.render('index', libAbout);
});

app.listen(3001, function() {
	console.log("Listen on port 3001");
});