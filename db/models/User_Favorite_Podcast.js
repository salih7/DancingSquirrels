const knex = require('../db.js');
const bookshelf = require('bookshelf')(knex);

const UserFavoritePodcast = bookshelf.Model.extend({
  tableName: 'user_favorite_podcasts'
});

const insertOne = (options, cb) => {
  UserFavoritePodcast
    .forge(options)
    .save()
    .then((data) => {
      return cb(data);
    })
    .catch((err) => {
      return cb(err);
    });
};

const fetchFavoritePodcasts = (userId, cb) => {
  UserFavoritePodcast
    .forge()
    .where('user_id', userId)
    .fetchAll()
    .then((data) => {
      return cb(data);
    })
    .catch((err) => {
      return cb(err);
    });
};

const destroy = (collectionId, cb) => {
  UserFavoritePodcast
    .where('collectionId', collectionId)
    .destroy()
    .then((data) => {
      return cb(data);
    })
    .catch((err) => {
      return cb(err);
    });
};

module.exports.UserFavoritePodcast = UserFavoritePodcast;
module.exports.insertOne = insertOne;
module.exports.fetchFavoritePodcasts = fetchFavoritePodcasts;
module.exports.destroy = destroy;
