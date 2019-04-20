const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./queries');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/prices/:day', db.getPricesByDay);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}...`));
