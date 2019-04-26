const pg = require('pg');

// ***** Using a Pool connection *****

const db_PG = new pg.Pool({
  host: 'localhost',
  user: 'danslaptop',
  database: 'hotel_pricing',
  max: 50,
});

// ***** Connection to Redis cache *****

const redis = require('redis');

const client = redis.createClient();

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
