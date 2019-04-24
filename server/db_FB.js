const admin = require('firebase-admin');

const serviceAccount = require('./archive/sdc-hotel-pricing-238420-7e59d551eda0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sdc-hotel-pricing.firebaseio.com',
});

const db_FB = admin.firestore();

// db_FB.collection('pricing').get().then((querySnapshot) => {
//   console.log(querySnapshot.size);
// });

console.log('hi');

module.exports = db_FB;
