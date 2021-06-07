var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var port=9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname));

app.get('/*',function(req,res,next)
{
	  	res.sendFile(__dirname + 'index.html');
	  				
});
app.listen(port, function() 
{

 console.log("App started on port :"+port);

});