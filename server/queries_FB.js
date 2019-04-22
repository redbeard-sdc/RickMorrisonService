const db_FB = require('./db_FB');

// not set up yet

const getPricesByDay = () => {
  db_FB.collection('users').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
};

module.exports = {
  getPricesByDay,
};
