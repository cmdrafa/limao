const passport = require('passport');
const mongoose = require('mongoose');
const Strategy = require('passport-local').Strategy;

const localOptions = { usernameField: 'email' };

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    console.log('serializing user', user.id);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);

    done(null, user);
});

passport.use(new Strategy(localOptions,
    async (email, password, done) => {
        console.log('inside passport strategy');
        // console.log('email', email);
        // console.log('password', password);

        const user = await User.findOne({ email: email });

        if (!user) {
            console.log('User doesnt exist, inside passport strategy');
            done(null, false);
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));