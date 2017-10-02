const mongoose = require('mongoose');
var fs = require('fs');
const { Schema } = mongoose;

const dataSchema = new Schema({
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    }
});

mongoose.model('images', dataSchema);
