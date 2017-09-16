const passport = require('passport');
const authentication = require('../services/authentication');

module.exports = (app) => {
    app.get('/post', passport.authenticate('local'), authentication.signin);

    app.post('/signup', authentication.signup);

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};