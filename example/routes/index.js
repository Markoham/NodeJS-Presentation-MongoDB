

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
	{
        console.log("big data");
        console.log(req.body);
        res.json({data: [
            {text:"jotain1", user: { name: "a", screen_name: "f", location: "e", followers_count: 5, statuses_count: 55, created_at: new Date()}}, 
            {text:"jotain2", user: { name: "b", screen_name: "g", location: "r", followers_count: 5, statuses_count: 55, created_at: new Date()}}, 
            {text:"jotain3", user: { name: "c", screen_name: "h", location: "t", followers_count: 5, statuses_count: 55, created_at: new Date()}}
        ]});
    });

}
