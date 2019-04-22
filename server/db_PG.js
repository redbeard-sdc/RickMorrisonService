const pg = require('pg');
const login = require('./archive/login');

const conString = `postgres://${login}@localhost:5432/hotel_pricing`;

const db_PG = new pg.Client(conString);

db_PG.connect((err) => {
  if (err) console.log('ERROR!');
  else {
    console.log('hotel_pricing database connected...');
  }
});

module.exports = db_PG;
