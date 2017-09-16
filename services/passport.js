const passport = require('passport');
const mongoose = require('mongoose');
const Strategy = require('passport-local').Strategy;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);

    done(null, user);
});

passport.use(new Strategy(
    async (username, password, done) => {

        const existingUser = await User.findOne({ username: username });

        if (existingUser) {
            done(null, existingUser);
        } else {
            done(null, false);
        }
    }
));