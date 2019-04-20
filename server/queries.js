const pool = require('./db');

const getPricesByDay = (req, res) => {
  const { day } = req.params;
  const sql = `SELECT * FROM pricing WHERE day=${day};`;

  pool.query(sql, (err, results) => {
    if (err) {
      res.status(404).json('Connot process request');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = {
  getPricesByDay,
};
