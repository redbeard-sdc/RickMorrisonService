const csv = require('csv-parser');
const fs = require('fs');
const db_FB = require('./db_FB');

// Using a seeding function...

const createRandomPrice = () => Math.floor(Math.random() * 100) + 100;

let dayCounter = 0;

const seedFirestore = () => {
  for (let i = 0; i < 100; i++) {
    const batch = db_FB.batch();
    for (let j = 0; j < 500; j++) {
      const docRef = db_FB.collection('pricing').doc(`${dayCounter}`);
      const availability = Math.random() > 0.1;
      batch.set(docRef, {
        day: dayCounter,
        roomAvail: availability,
        Priceline: availability ? createRandomPrice() : null,
        Booking: availability ? createRandomPrice() : null,
        Hotels: availability ? createRandomPrice() : null,
        OfficialHotelSite: availability ? createRandomPrice() : null,
        Expedia: availability ? createRandomPrice() : null,
        TripAdvisor: availability ? createRandomPrice() : null,
        Orbitz: availability ? createRandomPrice() : null,
        Hotwire: availability ? createRandomPrice() : null,
        Agoda: availability ? createRandomPrice() : null,
        CheapTickets: availability ? createRandomPrice() : null,
      });
      dayCounter++;
    }
    batch.commit();
  }
};

let loopCounter = 0;

const seed = async () => {
  if (loopCounter < 200) {
    loopCounter++;
    await seedFirestore();
    setTimeout(seed, 100);
  }
};

seed();

// Using the file system and a populated csv file...

fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', (row) => {
    db_FB.collection('pricing').add({
      day: row.day,
      roomAvail: row.roomAvail,
      Priceline: row.Priceline,
      Booking: row.Booking,
      Hotels: row.Hotels,
      OfficialHotelSite: row.OfficialHotelSite,
      Expedia: row.Expedia,
      TripAdvisor: row.TripAdvisor,
      Orbitz: row.Orbitz,
      Hotwire: row.Hotwire,
      Agoda: row.Agoda,
      CheapTickets: row.CheapTickets,
    });
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
