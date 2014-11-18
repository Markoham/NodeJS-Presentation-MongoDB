var mongoose = require('mongoose');

var dbUrl = 'mongodb://kayttaja2:sala2@104.131.167.239:27017/data';
var connection = mongoose.createConnection(dbUrl);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
  console.info('connected to database');
});


var userSchema = mongoose.Schema({
	waId	        : String,
    access          : Boolean,
    admin           : Boolean,
    username        : String,
    name            : {
        familyName  : String,
        givenName   : String
    }
});

module.exports = mongoose.model('user', userSchema);
