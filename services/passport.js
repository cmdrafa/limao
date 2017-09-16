const passport = require('passport');
const mongoose = require('mongoose');
const Strategy = require('passport-local').Strategy;

const config = require('../config/config');

const User = mongoose.model('users');

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