const UserModel = require('../../db/models/User.js');
const sessionHelpers = require('./sessionHelpers.js');
const url = require('url');

const insertExternal = (profile) => {
  let username = profile.id;
  let password = profile.id;
  UserModel.fetchOneExternal(username, password, (err, bool) => {
    if (!bool) {
      UserModel.insertOneExternal(username, password, profile.provider, profile.id, (err, user) => {
        if (err) {
          console.log('error');
        } else {
          console.log('success');
        }
      })
    }
  })
}

const sessionHandler = (req) => {
  req.session.regenerate((err) => {
    if (err) {
      console.log(err);
    }
  })
}

const verifySession = (req, res, next) => {
  let sid = req.sessionID;
  if (req.url.includes('/user')) {
      let user = req.url.substring(6);
    sessionHelpers.store.get(sid, (err, sess) => {
      if (sess.passport !== undefined) {
        let passportUser = sess.passport.user;
        if (passportUser === user) {
          res.send('loggedIn')
        } else {
          res.redirect('/#/login')
        }
      } else {
        res.redirect('/#/login')
      }
    })
  } else {
    next();
  }
}

module.exports.insertExternal = insertExternal;
module.exports.sessionHandler = sessionHandler;
module.exports.verifySession = verifySession;

