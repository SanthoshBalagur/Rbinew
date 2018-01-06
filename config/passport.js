const User = require('../model/user');
const Admin = require('../model/admin');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local', new LocalStrategy(((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      // console.log('not a user');
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    // console.log('right');
    return done(null, user);
  });
})));

passport.use('admin', new LocalStrategy(((username, password, done) => {
  Admin.findOne({ username }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      // console.log('not a user');
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    // console.log('right');
    return done(null, user);
  });
})));

