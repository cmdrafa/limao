// Modules
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Config files
const config = require('./config/config');

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoURI, {
    useMongoClient: true
});


const app = express();


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log('Limao webserver running on port', PORT);
});