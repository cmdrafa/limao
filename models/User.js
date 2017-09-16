const mongoose = require('mongoose');
const { Schema } = mongoose;
const PostSchema = require('./Post');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    posts: [PostSchema],
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

userSchema.pre('save', (next) => {
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

mongoose.model('users', userSchema);

