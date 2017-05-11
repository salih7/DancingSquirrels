const db = process.env.DATABASE_URL || { database: 'podiocast' };

module.exports = {

  development: {
    client: 'pg',
    connection: db
  }
};