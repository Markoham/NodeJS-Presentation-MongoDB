module.exports = function(app, passport)
{
    // ----------------------------------
    // ---- AUTH ------------------------
    // ----------------------------------
	function auth(req, res, next)
	{
		if(req.isAuthenticated())
			return next();
        
		res.redirect('/login');
	}
    
    function access(req, res, next)
    {
        if(req.isAuthenticated() && req.user.access)
			return next();
        
		res.redirect('/error');
    }
    
    function notAuth(req, res, next)
	{
		if(!req.isAuthenticated())
			return next();
        
		res.redirect('/');
	}
    
    // ----------------------------------
    // ---- ADMIN ------------------------
    // ----------------------------------
    function adminPost(req, res, next)
    {
        if(req.isAuthenticated() && req.user.admin)
			return next();

        res.json({success: false, message: 'Valitettavasti sinulla ei ole oikeutta käyttää tätä ominaisuutta, ota yhteyttä IT-tukeen!'});
    }
    
    function admin(req, res, next)
    {
        if(req.isAuthenticated() && req.user.admin)
			return next();

        res.render('noaccess');
    }

	// ----------------------------------
    // ---- HOME ------------------------
    // ----------------------------------
	app.get('/', auth, access, function(req, res)
    {
		res.render('layout', { user: req.user });
	});
    
    app.get('/index', auth, access, function(req, res)
    {
		res.render('index', { user: req.user });
	});
    
    app.get('/search', auth, access, function(req, res)
    {
		res.render('search', { user: req.user });
	});
    
    app.get('/login', notAuth, function(req, res)
    {
		res.render("login", { message: req.flash('loginErrorMessage') });
	});
    
    app.post('/login', function(req, res, next)
    {
        passport.authenticate('WindowsAuthentication', function(err, user, info)
        {
            if(err)
                return next(err);
            
            if(info && info.loginErrorMessage)
            {
                req.flash('loginErrorMessage', info.loginErrorMessage);
                return res.redirect('/login');
            }
            if(info && info.permissionFail)
            {
                req.flash('loginErrorMessage', info.permissionFail);
                return res.redirect('/login');
            }
            
            req.logIn(user, function(err)
            {
                if(err)
                    return next(err);
                return res.redirect('/');
            });
        })(req, res, next);
    });

    app.get('/logout', function(req, res)
    {
        req.logout();
        res.redirect('/');
    });
    
    //require('./companys')(app, auth, access, admin, adminPost);
}
