

module.exports = function(app)
{
	// ----------------------------------
    // ---- HOME ------------------------
    // ----------------------------------
	app.get('/', function(req, res)
    {
		res.render('layout');
	});

	app.get('/search/:keyword', function(req, res)
	{

})

}
