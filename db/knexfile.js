const db = process.env.DATABASE_URL || '127.0.0.1'

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: db,
      database: 'podiocast'
    }
  }
};