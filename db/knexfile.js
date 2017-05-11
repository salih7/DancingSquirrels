const db = process.env.DATABASE_URL || { host: '127.0.0.1', database: 'podiocast' }

module.exports = {

  development: {
    client: 'postgresql',
    connection: db
  }
};