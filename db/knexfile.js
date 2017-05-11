const db = process.env.DATABASE_URL || { database: 'podiocast' };

module.exports = {

  development: {
    client: 'postgresql',
    connection: db
  }
};