const UserModel = require('../../db/models/User.js');

const insertExternal = (profile) => {
  console.log(profile)
  let username = profile.displayName.split(' ').join('').toLowerCase();
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

module.exports.insertExternal = insertExternal;
