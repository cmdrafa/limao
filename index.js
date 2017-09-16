// Modules
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

// Config files
require('./services/passport');
const config = require('./config/config');

// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {
    useMongoClient: true
});

//bind express to app
const app = express();

// Tell expresse to use the necessary middleware
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: (30*24*60*60*1000),
        keys: [config.cookieKey]
    }));
app.use(passport.initialize());
app.use(passport.session());

// Bind the auth route to express
require('./routes/auth_route/')(app);

//Define PORt and open the node server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log('Limao webserver running on port', PORT);
});