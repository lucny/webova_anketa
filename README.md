# Webová anketa - školní projekt v Node.js a Express

## Zadání
### Cíl úlohy
Cílem úlohy je vytvoření serverové aplikace v Node.js s využitím frameworku Express, která umožní vytvářet, odesílat a analyzovat jednoduchou anketu zaměřenou na sport a tělesné aktivity ve webovém formuláři. 

Aplikace bude uchovávat data odpovědí v souboru ve formátu JSON a využije EJS pro vykreslení stránek s výsledky ankety.

### Základní požadavky
* Vyplnění ankety: Umožněte uživatelům prostřednictvím webového formuláře vyplnit vaši anketu. Každá anketa by měla obsahovat název, bližší popis a libovolný počet otázek (otevřené nebo uzavřené typy).
* Zobrazení výsledků: Vytvořte funkci pro zobrazení výsledků ankety, včetně počtu a procentuálního rozdělení odpovědí pro uzavřené otázky a seznamu odpovědí pro otázky otevřené.
* Ukládání odpovědí: Odpovědi na anketu ukládejte do souboru responses.json ve formátu JSON. Každá odpověď by měla obsahovat ID ankety, odpovědi uživatele a časové razítko odeslání.
* Dynamické vykreslování stránek: Použijte EJS k vykreslení stránek, včetně formuláře pro odpovědi a stránek pro zobrazení výsledků. Pro každou část aplikace vytvořte samostatnou EJS šablonu.
* Vylepšení uživatelského rozhraní: Implementujte pokročilé funkce pro lepší uživatelský komfort, například validaci formulářů nebo interaktivní grafy pro zobrazení statistik.

### Technické detaily
* Pro práci se soubory použijte modul fs z Node.js.
* Použijte body-parser pro zpracování dat odeslaných formuláři.
* Vytvořte přehledný kód aplikace
* Ujistěte se, že všechny stránky jsou responzivní a funkční na různých zařízeních.
* Řešení umístěte na Githubu a odevzdejte adresu své aplikace.
---
## Postup práce
### Inicializace projektu
1. **Vytvoření složky projektu**: Začněte vytvořením nové složky pro váš projekt a otevřením této složky v příkazové řádce nebo terminálu.
	```
    mkdir node-anketa
    cd node anketa
    ```
2. **Inicializace NPM**: Spusťte `npm init` k vytvoření souboru `package.json`, který bude spravovat závislosti vašeho projektu. 
	```    
    npm init
    ```
3. **Instalace závislostí**: Instalujte balíčky *Express*, *EJS* a *body-parser* pomocí npm:    
	```    
    npm install express ejs body-parser
    ```
4. **Vytvoření souboru README.md**: Vytvořte soubor README.md a popisujte v něm postupně kroky při tvorbě tohoto projektu. 
Naučte se používat jazyk [markdown](https://www.markdownguide.org/cheat-sheet/#downloads).
5. **Vytvoření souboru .gitignore**: Vytvořte soubor .gitignore a nastavte v něm, aby při ukládání do repozitáře gitu byla ignorována složka `node_modules`.
6. **Vytvoření nového lokálního repozitáře GIT**:
    - `git init`
    - `git config user.name "uzivatel_na_githubu"`
    - `git config user.email "email_na_githubu"`
7. **Vytvoření nového vzdáleného repozitáře na Githubu**: Nazvěte ho např. `webova_anketa`
![Založení nového repozitáře](./docs/img/github-new-repository.png)
8. **Úvodní commit do lokálního repozitáře**:
    - `git add .`
    - `git commit -m "Inicializace projektu"`
9. **Vytvoření a aktivace ssh klíče**: viz např. [Add a SSH Key to Github](https://www.youtube.com/watch?v=iVJesFfzDGs)   
10. **Propojení repozitářů a jejich synchronizace**: Využijte dobrých rad z Githubu:
![Propojení repozitářů](./docs/img/github-remote-add.png)
    - `git remote add origin git@github.com:nejake_jmeno/webova_anketa.git`
    - `git push -u origin main`

---
### Vytvoření serveru a nastavení routování
1. **Vytvoření indexu.js**: Vytvořte soubor index.js, připojte v něm potřebné knihovny a aktivujte webový server.
	```    
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
	```    
2. **Testovací spuštění serveru**:
    - `node index.js` nebo jen `node .`
    - pro testování raději nainstalujte `npm i nodemon -g` a poté lze server spouštět `nodemon .`
    - je rovněž vhodné upravit v souboru `package.json` sekci `scripts`:
	```  
    ...  
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    }, 
    ...   
	```
    - a poté lze serverovou aplikaci spouštět také `npm start`    
3. **Nastavení routování**: Nyní si můžeme připravit základní **routy**, tedy URL adresy, na které bude možné odesílat požadavky.
    Do souboru `index.js` přidáme následující kód:
	```  
    ...
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
    ...    
	```  
4. **Vytvoření šablon**: 
    - V základní složce projektu založíme složku `views`
    - Ve složce `views` vytvoříme soubory `index.ejs` a `results.ejs`:
    
    *Šablona index.ejs*
    ```
    <!DOCTYPE html>
    <html lang="cs">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Webová anketa</title>
    </head>
    <body>
        <h1>Webová anketa</h1>
    </body>
    </html>
    ```

    *Šablona results.ejs*
    ```
    <!DOCTYPE html>
    <html lang="cs">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Výsledky ankety</title>
    </head>
    <body>
        <h1>Výsledky ankety</h1>
    </body>
    </html>
    ```    
5. **Připojení CSS**: 
    - V základní složce projektu založíme složku `public`, v níž budou statické soubory (CSS, JS, grafické přílohy apod.)
    - Ve složce `public` vytvoříme podsložku `css` a soubor `styles.css`. Vložíme do něj několik CSS pravidel:
    
    *Statický soubor styles.css*
    ```
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }


    h1 {
        color: white;
        background-color: blue;
        font-size: 30pt;
        padding: 10px;
        margin: 0;
    }    
    ```
    - Tento soubor připojíme k oběma šablonám pomocí `<link rel="stylesheet" href="css/styles.css">`
6. **Ověření funkčnosti webu**: Aktuální stav našeho webového serveru prověříme jeho spuštěním a zadáním URL adres v prohlížeči:
    
   [http://localhost:3000/](http://localhost:3000/)
   ![Domovská stránka](./docs/img/homepage-01.png)

   [http://localhost:3000/results](http://localhost:3000/results)
   ![Stránka s výsledky](./docs/img/results-01.png)


