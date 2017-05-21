const async = require('async');


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.set('X-Auth-Required', 'true');
    req.session.returnUrl = req.originalUrl;
    res.redirect('/login/');
}

function authenticationMiddleware () {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/login')
    }
}

module.exports = function(app, passport) {

    app.get('/linkgenerator/:link', require(__base + '/app/controllers/links').linkGenerator);
    app.get('/linkgenerator/:link/*/*', require(__base + '/app/controllers/links').linkGeneratorError);
    app.get('/sl/:shortlink', require(__base + '/app/controllers/links').findLink);
    app.get('/logout', function(req, res){
        res.redirect('/');
        //TODO complete this route
    });
};