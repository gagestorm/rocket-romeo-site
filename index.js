var express = require('express'),base_url='http://rocketromeo.me/';
var app = express(),
    exphbs  = require('express-handlebars');
var request = require('request');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var util = require('util'),
    EventEmitter = require('events').EventEmitter;


app.engine('.hbs', exphbs({defaultLayout: 'main',extname:'.hbs'}));
app.set('view engine', '.hbs'); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(__dirname + "/public"));

//Basic application getting loaded : The web interface.
app.get('/',function(req,res){
    res.render('home', { data : { base_url : base_url } } );     
});

http.listen(3000,function(){
    console.log('Listening on *:3000');
});
