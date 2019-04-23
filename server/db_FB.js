const admin = require('firebase-admin');

const serviceAccount = require('./archive/sdc-hotel-pricing-238420-7e59d551eda0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db_FB = admin.firestore();

module.exports = db_FB;
