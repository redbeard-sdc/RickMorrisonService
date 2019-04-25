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

/* Using a Pool...

const db_PG = new pg.Pool({
  host: 'localhost',
  user: 'danslaptop',
  database: 'hotel_pricing',
  max: 20,
});
*/

module.exports = db_PG;
