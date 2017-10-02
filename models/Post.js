const mongoose = require('mongoose');
const { Schema } = mongoose;
const dataSchema = require('./Datamodel');

const PostSchema = new Schema({
    title: String,
    briefDesc: String,
    body: String,
    subject: String,
    section: String,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    imageOne: [dataSchema],
    postDate: Date,
    video: String,
    url: String,
});

mongoose.model('posts', PostSchema);

