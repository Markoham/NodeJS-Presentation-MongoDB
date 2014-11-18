'use strict';
var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var path            = require('path');
var favicon         = require('static-favicon');
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var ejs             = require('ejs');

// Database && Passport
mongoose.connect('mongodb://localhost/crm');

app.use(favicon());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// view engine setup
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
// Sessions

// Passport

// public files
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
require('./routes')(app);


// =======================================================
// --------- ERROR HANDLING ------------------------------
// =======================================================

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000);
//module.exports = app;
