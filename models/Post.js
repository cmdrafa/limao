const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    postDate: Date,
    img: {
        data: Buffer,
        type: String,
    },
    video: String,
    url: String,
});

mongoose.model('posts', PostSchema);