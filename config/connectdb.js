const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '29122001',
  port: 5432,
  database: 'week10_agasi'
})

module.exports = pool;