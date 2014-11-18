var mongoose = require('mongoose');


var dataSchema = mongoose.Schema({
    text                : String,
    user                : {
        name            : String,
        screen_name     : String,
        location        : String,
        followers_count : Number,
        statuses_count  : Number,
        created_at      : Date
    }
});

module.exports = mongoose.model('data', dataSchema);
