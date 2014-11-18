var mongoose = require('mongoose');


var dataSchema = mongoose.Schema({
  waId	        : String,
    access          : Boolean,
    admin           : Boolean,
    username        : String,
    name            : {
        familyName  : String,
        givenName   : String
    }
});

module.exports = mongoose.model('data', dataSchema);
