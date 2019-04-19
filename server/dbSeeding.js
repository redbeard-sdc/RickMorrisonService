/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
const fs = require('fs');

const createRandomPrice = () => Math.floor(Math.random() * 100) + 100;

const columnNames = ['id', 'day', 'roomAvail', 'Priceline', 'Booking', 'Hotels',
  'OfficialHotelSite', 'Expedia', 'TripAdvisor', 'Orbitz', 'Hotwire', 'Agoda', 'CheapTickets'];

const createDailyPrices = () => {
  fs.writeFileSync('./data.csv', columnNames.join(','));
  for (let j = 0; j < 1000; j += 1) {
    let fakeDays = '\n';
    for (let i = 0; i <= 10000; i += 1) {
      let id = i;
      let day = i;
      let roomAvail = Math.random() > 0.1;
      let Priceline = createRandomPrice();
      let Booking = createRandomPrice();
      let Hotels = createRandomPrice();
      let OfficialHotelSite = createRandomPrice();
      let Expedia = createRandomPrice();
      let TripAdvisor = createRandomPrice();
      let Orbitz = createRandomPrice();
      let Hotwire = createRandomPrice();
      let Agoda = createRandomPrice();
      let CheapTickets = createRandomPrice();

      let dailyPrices = `${id}, ${day}, ${roomAvail}, ${Priceline}, ${Booking}, ${Hotels}, ${OfficialHotelSite}, ${Expedia}, ${TripAdvisor}, ${Orbitz}, ${Hotwire}, ${Agoda}, ${CheapTickets}`;

      fakeDays += `${dailyPrices}\n`;
    }
    fs.appendFileSync('./data.csv', fakeDays);
  }
};

createDailyPrices();
