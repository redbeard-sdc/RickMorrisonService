const admin = require('firebase-admin');

const serviceAccount = require('./archive/sdc-hotel-pricing-238420-7e59d551eda0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db_FB = admin.firestore();

const createRandomPrice = () => Math.floor(Math.random() * 100) + 100;

const seedFirestore = () => {
  for (let i = 0; i < 10; i++) {
    const docRef = db_FB.collection('pricing').doc(`${i}`);
    const availability = Math.random() > 0.1;
    const setDoc = docRef.set({
      day: i,
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
  }
};

seedFirestore();

module.exports = db_FB;
