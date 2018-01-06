const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');
const passport = require('passport');
const session = require('express-session');
require('./config/passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');

mongoose.connect('mongodb://rbi:rbi@ds141657.mlab.com:41657/rbi');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
var port = process.env.PORT || 3000 ;
app.listen(port, function () {
  console.log('Example app listening!');
});
