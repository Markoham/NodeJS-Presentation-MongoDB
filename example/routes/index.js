var Data = require('./models/data');
var Person = require('./models/user');

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
        res.json({persons: [ {name:"pertti", job:"myyjä"}, {name:"antti", job:"koodari"}, {name:"sanni", job:"arkkitehti"} ]});
    });

    app.post('/api/person', function(req, res)
    {
        console.log("add");
        console.log(req.body);
        res.json({success: true});
    });

    app.delete('/api/person', function(req, res)
    {
        console.log("delete");
        console.log(req.body);
        res.json({success: true});
    });

	app.get('/api/search/:keyword', function(req, res)

		Data.aggregate([ { $match : {text: { $regex: 'hello' , $options: 'g'} }}], function (err, result) {
    	if(err) {
      	console.log(err);
        return;
      }
      	console.log(result);
				return result;
    });
}
	{
    });

}
