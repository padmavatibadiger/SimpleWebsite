var mongoose= require('mongoose');
var Schema= mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/website");

mongoose.connection.on('open', function(ref){
	console.log('Connected to mongo server.');
});

mongoose.connection.on('error', function(err){
	console.log('could not connect to the mongo server!');
	console.log(err);
});

mongoose.connect('mongodb://localhost/mongodbs');

module.exports.user=mongoose.model('Contact', new Schema({
   name: String,
   email: String,
   phone: String,
   message: String
}));