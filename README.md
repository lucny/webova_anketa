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

