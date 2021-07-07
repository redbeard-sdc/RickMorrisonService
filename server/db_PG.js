const pg = require('pg');
const redis = require('redis');
const { login, password } = require('./archive/PGlogin');

// ***** Using a Pool connection *****

const db_PG = new pg.Pool({
  host: process.env.PGHOST || 'pricing.cj6wmj0g0c9p.us-east-2.rds.amazonaws.com',
  user: process.env.PGUSER || login,
  password: process.env.PASSWORD || password,
  database: process.env.PGDATABASE || 'sdc_hotel_pricing',
  max: 50,
});

// ***** Connection to Redis cache *****

const client = redis.createClient(process.env.REDISURL);

client.on('error', () => {
  console.log('Error connecting to Redis...');
});

client.on('connect', () => {
  console.log('Connected to Redis client...');
});

module.exports = {
  db_PG,
  client,
};


// ***** Using a Client connection *****

// const login = require('./archive/login');

// const conString = `postgres://${login}@localhost:5432/hotel_pricing`;

// const db_PG = new pg.Client(conString);

// db_PG.connect((err) => {
//   if (err) console.log('ERROR!');
//   else {
//     console.log('hotel_pricing database connected...');
//   }
// });
