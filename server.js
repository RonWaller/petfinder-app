require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const animals = require('./mockdata/animals');

const app = express();
app.use(express.static('public'));
const pets = animals.animals[0];
console.log(pets);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
