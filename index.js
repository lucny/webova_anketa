const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // pro statické soubory (CSS, JS)
app.set('view engine', 'ejs'); // nastavení EJS jako šablonovacího nástroje

app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});