const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel_pricing',
});

module.exports = pool;
