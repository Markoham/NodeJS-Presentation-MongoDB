

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

	app.get('/search/:keyword', function(req, res)
	{

})

}
