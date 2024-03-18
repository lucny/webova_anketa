const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // pro statické soubory (CSS, JS)
app.set('view engine', 'ejs'); // nastavení EJS jako šablonovacího nástroje

/* Routa pro zobrazení úvodní stránky */ 
app.get('/', (req, res) => {
    // Zde, na úvodní stránce, budeme zobrazovat formulář pro vyplnění ankety
    res.render('index', { title: 'Webová anketa' }); // index.ejs je soubor šablony
});

/* Routa pro zpracování dat z formuláře */
app.post('/submit', (req, res) => {
    // Zde budeme ukládat data z formuláře do souboru responses.json
    res.redirect('/results'); // Po uložení dat přesměrujeme uživatele na stránku s výsledky
});

/* Routa pro zobrazení výsledků ankety */
app.get('/results', (req, res) => {
    // Zde bude načtení dat ze souboru responses.json a jejich předání do šablony
    res.render('results', { title: 'Výsledky ankety' }); // results.ejs je soubor šablony
});

app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});