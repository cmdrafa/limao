const mongoose = require('mongoose');

const User = mongoose.model('users');

exports.signin = (req, res, next) => {
    //console.log('Inside signin route');

    res.send(req.user);
};

exports.signup = async (req, res, done) => {
    console.log('Inside signup route');
    console.log('Body object ', req.body);

    if (!req.body.email || !req.body.password) {
        return res.status(422).send({ error: 'Please provide an email and password'});
    }

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        console.log(existingUser);
        return res.status(422).send({ error: 'Email is already in use' });
    }

    const user = await new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    user.save();

    res.send(req.user);

    done(null, user);
};