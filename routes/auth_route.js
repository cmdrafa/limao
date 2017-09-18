const passport = require('passport');
const passportService = require('../services/passport');
const authentication = require('../controllers/authentication');


const requireAuth = passport.authenticate('local');

module.exports = (app) => {
    app.post('/signin', requireAuth, authentication.signin);

    app.post('/signup', authentication.signup);

    app.get('/api/current_user', (req, res) => {
        // console.log('inside this route');
        res.send(req.user);
    });

    app.get('/logout', (req, res) => {
        console.log('Loggin out');
        req.logout();
        res.redirect('/');
    });
};