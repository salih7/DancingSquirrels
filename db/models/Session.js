const knex = require('../db.js')
const bookshelf = require('bookshelf')(knex);

const Session = bookshelf.Model.extend({
  tableName: 'sessions'
})

module.exports.Session = Session;
