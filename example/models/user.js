var mongoose = require('mongoose');

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
