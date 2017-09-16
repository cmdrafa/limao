const User = require('../models/User');
const config = require('../config/config');

exports.signin = (req, res, next) => {
    res.send(req.user);
};

exports.signup = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    async (firstName, lastName, email, password, done) => {
        const existingUser = await User.findOne({ email: email });

        if(existingUser) {
            return res.status(422).send({ error: 'Email is in user'});
        }

        const user = await new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).save();
        done(null, user);
    };
};