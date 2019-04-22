const db_PG = require('./db_PG');

const getPricesByDay = (req, res) => {
  const { day } = req.params;
  const sql = `SELECT * FROM pricing WHERE id=${Number(day) + 1};`;

  db_PG.query(sql, (err, results) => {
    if (err) {
      res.status(404).json('Cannot process request');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = {
  getPricesByDay,
};
