const User = require('../models/User');

exports.signin = (req, res, next) => {
    res.send(req.user);
};

exports.signup = async (req, res, done) => {

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        return res.status(422).send({ error: 'Email is in user' });
    }

    const user = await new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }).save();

    done(null, user);

    res.send(user);
};