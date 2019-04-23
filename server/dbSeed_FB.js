const csv = require('csv-parser');
const fs = require('fs');
const db_FB = require('./db_FB');

fs.createReadStream('./data-small.csv')
  .pipe(csv())
  .on('data', (row) => {
    // if (row) {
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
    // } else {
    //   console.log('No data');
    // }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


// const seedFirestore = () => {
//   for (let i = 0; i < 1; i++) {
//     for (let j = 0; j < 100000; j++) {
//       const docRef = db_FB.collection('pricing').doc(`${j}`);
//       const availability = Math.random() > 0.1;
//       docRef.set({
//         day: i,
//         roomAvail: availability,
//         Priceline: availability ? createRandomPrice() : null,
//         Booking: availability ? createRandomPrice() : null,
//         Hotels: availability ? createRandomPrice() : null,
//         OfficialHotelSite: availability ? createRandomPrice() : null,
//         Expedia: availability ? createRandomPrice() : null,
//         TripAdvisor: availability ? createRandomPrice() : null,
//         Orbitz: availability ? createRandomPrice() : null,
//         Hotwire: availability ? createRandomPrice() : null,
//         Agoda: availability ? createRandomPrice() : null,
//         CheapTickets: availability ? createRandomPrice() : null,
//       });
//     }
//   }
// };

// seedFirestore();
