const passport = require('passport');
const authentication = require('../services/authentication');

module.exports = (app) => {
    app.post('/auth/login', passport.authenticate('local'),
        (req, res) => {
            res.redirect('/');
        });
    
    app.post('/signup', passport.authenticate('local-login'));

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};