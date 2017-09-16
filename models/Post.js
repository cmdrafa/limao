const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    tile: String,
    body: String,
    subject: String,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postDate: Date,
    media: String
});

mongoose.model('posts', PostSchema);