# Engelsbriefe

### Repo für das Interface der Engels Ausstellung
`https://engels.arrenberg.studio/`


## Table of Contents
* [Requirements](#requirements)
* [React Commands](#react-commands)
* [Git Commands](#git-commands) 
* [Briefe](#briefe)
* [Additional Testing](#additional-testing)
* [Markdown Styles](#markdown-styles)
* [Pages](#pages)
* [Tools](#tools)
* [Contact](#contact)

## Requirements
```bash
Nodejs # nodejs needs to be installed seperately 
npm # will be installed in the Git setup process
```

## React Commands
```bash
# Start localhost dev server
npm run dev
# Start localhost server
npm run build
npm run start
# on Windows
npm run start_windows
```

## Git Commands

[Here](https://github.com/j0hannr/engels-briefe/blob/master/Git-Commands.md)


## Briefe

Nummer *ID* | Author | Datum | Ort | Vorhanden | Exportiert | Fertig | Audio | Kommentar 
--- | --- | --- | --- | --- | --- | --- | --- | --- 
001 | Louise Engels, geb. Noot | 1791-01-05 | Hagen | :white_check_mark: | | | :x: | Weibliche Einlesung, Audio wird nachgeliefert
004 | Friedrich Christian Hoffmann | 1791-05-12 | Düsseldorf | :white_check_mark: | | | :white_check_mark: |
021 | Johann Caspar Engels | 1791-09-09| Barmen | :white_check_mark: | | | :white_check_mark: |
022 | Louise Engels, geb. Noot | 1791-09-10 | Ruhrort | :white_check_mark: | | | :x: | Weibliche Einlesung, Audio wird nachgeliefert
029 | Louise Engels, geb. Noot | 1792-10-25 | Barmen | :white_check_mark:| | | :x: | Weibliche Einlesung, Audio wird nachgeliefert
068 | Johann Caspar Engels | 1813-07-04 | Barmen | :white_check_mark:| | | :white_check_mark: |
071 | Johann Caspar Engels | 1813-11-12 | Barmen | :white_check_mark: | | | :white_check_mark: |
075 | Johann Caspar Engels | 1814-02-03 | Barmen | :white_check_mark: | | | :white_check_mark: |
130 | Friedrich Engels sen. | 1816-09-21 | Barmen | :white_check_mark: | | | :white_check_mark: |
169 | Friedrich Engels sen. | 1818-07-03/04 | Barmen | :white_check_mark: | | | :white_check_mark: |
235a | Friedrich Engels sen. | 1820-12-01 | Barmen | :white_check_mark: | | | :white_check_mark: | Schlechte Scan Qualität!
255 | Friedrich Engels sen. | 1822-07-09 | Barmen | :white_check_mark: | | | :white_check_mark: |
265 | Friedrich Engels sen. | 1823-05-31 | Barmen | :white_check_mark: | | | :white_check_mark: |
284 | Gerhard Bernhard van Haar | 1826-04-20 | Hamm | :white_check_mark: | | | :white_check_mark: |
294 | Friedrich Engels sen. | 1827-08-16 | Paris | :white_check_mark: | | | :white_check_mark: |
306 | Friedrich Engels sen. | 1838-07-26 | London | :white_check_mark: | | | :white_check_mark: |
307 | Friedrich Engels sen. | 1838-08-11 | Bremen | :white_check_mark: | | | :white_check_mark: | Fehlerhafte Benennung?
341 | Friedrich Engels sen. | 1858-09-10 | Manchester | :white_check_mark: | | | :white_check_mark: | Schlechte Scan Qualität!

## Additional Testing

* Matomo https://www.npmjs.com/package/@datapunt/matomo-tracker-react
* LogRocket
* Service Workers

## Markdown Styles

*Hello* `World` **nicely** <br>
:warning:   :white_check_mark:  :x: <br>
[Git Emojis](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) <br>
[Another Source](https://gitmoji.carloscuesta.me)

## Pages

Name | Dir | Kommentar 
--- | --- | --- 
Index | / | landing page link to `briefe`
briefe | / | main_menu
themen | / | main_menu
personen | / | main_menu
[brief] | /brief | sub_menu + brief ansichten
[person] | /person | sub_menu
[thema] | /thema | sub_menu

## Tools

#### Code review
https://deepscan.io/dashboard <br>
https://www.codefactor.io/ <br>
https://codecov.io
#### Image optimization 
https://imgbot.net/app/
#### Html to JSX
https://magic.reactjs.net/htmltojsx.htm <br>
*remove all tags including `html` and `body`*


## Contact

`Studio Arrenberg` <br>
hallo@arrenberg.studio
