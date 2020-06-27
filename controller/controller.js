var models= require('../model/model.js');
var path- require('path');
var bodyParser= require('body-parser');

module.exports= function(app,io){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({

	}));

	app.get('/', function(req,res){
		res.sendFile(path.resolve(__dirname+"contactus.html"));
	});

	app.post('/sendMessage', function(req,res){
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader("Access-Control-Allow-Method","'GET, POST, OPTIONS, PUT, PATCH, DELETE'");
	
	    var details={
	    	"name":req.body.name;
	    	"email":req.body.email;
	    	"phone":req.body.phone;
	    	"message":req.body.message;
	    };

	    console.log(details);

	    
	})
}