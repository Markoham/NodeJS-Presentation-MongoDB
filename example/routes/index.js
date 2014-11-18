var Data = require('../models/data');
var Person = require('../models/person');

module.exports = function(app)
{
	// ----------------------------------
    // ---- HOME ------------------------
    // ----------------------------------
	app.get('/', function(req, res)
    {
		res.render('layout');
	});

    app.get('/view/main', function(req, res)
    {
		res.render('main');
	});

    app.get('/view/add', function(req, res)
    {
		res.render('add');
	});

    app.get('/view/list', function(req, res)
    {
		res.render('list');
	});

    app.get('/view/bigdata', function(req, res)
    {
		res.render('bigdata');
	});

    app.get('/api/person', function(req, res)
    {
        Person.find({}, function(err, persons)
        {
            if(err)
                console.log(err);
           return res.json({persons: persons}); 
        });
    });

    app.post('/api/person', function(req, res)
    {
        var person = new Person(req.body);
        console.log(person);
        
        person.save(function(err)
        {
            if(err)
                return res.json({success: false});
            return res.json({success: true});
        });
        
    });

    app.delete('/api/person', function(req, res)
    {
        console.log(req.body);
        
        Person.remove(req.body._id, function(err)
        {
            if(err)
                return res.json({success: false});
            
            return res.json({success: true}); 
        });
        
    });

	app.get('/api/search/:keyword', function(req, res)
    {
        Data.aggregate( [{ $match : {text: { $regex: 'hello' , $options: 'g'} }}], function (err, result) {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
            return res.json({data: result});
        });
    });
}
