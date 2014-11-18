var mongoose = require('mongoose');


var personSchema = mongoose.Schema({
	name	        : String,
    job             : String
});

module.exports = mongoose.model('persons', personSchema);
