/* eslint-disable prefer-const */
const fs = require('fs');

const createRandomPrice = () => Math.floor(Math.random() * 100) + 100;

const columnNames = ['day', 'roomAvail', 'Priceline', 'Booking', 'Hotels',
  'OfficialHotelSite', 'Expedia', 'TripAdvisor', 'Orbitz', 'Hotwire', 'Agoda', 'CheapTickets'];

const createDailyPrices = () => {
  fs.writeFileSync('./data.csv', `${columnNames.join(',')}\n`);
  for (let j = 0; j < 1000; j += 1) {
    let fakeDays = '';
    for (let i = 1; i <= 10000; i += 1) {
      let day = (j * 10000) + i;
      let roomAvail = Math.random() > 0.1;
      let Priceline = roomAvail ? createRandomPrice() : null;
      let Booking = roomAvail ? createRandomPrice() : null;
      let Hotels = roomAvail ? createRandomPrice() : null;
      let OfficialHotelSite = roomAvail ? createRandomPrice() : null;
      let Expedia = roomAvail ? createRandomPrice() : null;
      let TripAdvisor = roomAvail ? createRandomPrice() : null;
      let Orbitz = roomAvail ? createRandomPrice() : null;
      let Hotwire = roomAvail ? createRandomPrice() : null;
      let Agoda = roomAvail ? createRandomPrice() : null;
      let CheapTickets = roomAvail ? createRandomPrice() : null;

      let dailyPrices = `${day}, ${roomAvail}, ${Priceline}, ${Booking}, ${Hotels}, ${OfficialHotelSite}, ${Expedia}, ${TripAdvisor}, ${Orbitz}, ${Hotwire}, ${Agoda}, ${CheapTickets}`;

      fakeDays += `${dailyPrices}\n`;
    }
    fs.appendFileSync('./data.csv', fakeDays);
  }
};

createDailyPrices();
