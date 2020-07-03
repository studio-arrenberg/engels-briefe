# Engelsbriefe

### Repo für das Interface der Engels Ausstellung
`https://engels.arrenberg.studio/briefe`

*fight against redundant code* <br>
*ReadMe before asking*

## Open Questions 
sollen wir nur eine `CSS` datei nutzen? <br>
`index` as welcome page?

## Requirements
```bash
Nodejs # nodejs needs to be installed seperately 
npm # will be installed in the Git setup process
```

## React Commands
```bash
# Start localhost server
npm run dev
```

## Git Commands

### Set up 
```bash
git init
git clone https://github.com/j0hannr/engels-briefe.git
# make sure you are always in the *engels-briefe* directory to execute git and nodejs
cd engels-briefe
npm install
```
### Check master
```bash
git pull origin master
```
### Create branch
```bash
git checkout -b <BRANCH_NAME>
```
### Check branch
```bash
git fetch
git checkout <BRANCH_NAME>
```
### update branch
```bash
gut pull
```
### push files (in branch)
```bash
git add . 
# or <FILENAME OR PATH>
git commit -m "<comment>"
git push
# or git push --set-upstream origin <BRANCH_NAME> 
```
### merge and update branch in master
*you need to push all changes in branch and switch to master*
```bash
git checkout origin/master
git merge <BRANCH_NAME>
```


## Briefe

Nummer *ID* | Author | Datum | Ort | Status | Kommentar 
--- | --- | --- | --- | --- | ---
001 | Louise Noot | 1791-01-05 | Hagen | :x: | 
004 | Friedrich Christian Hoffmann | 1791-05-12 | Düsseldorf | :x: |
021 | Johann Caspar Engels | 1791-09-09| Barmen | :x: |
022 | Louise Engels, geb. Noot | 1791-09-10 | Ruhrort | :x: |
029 | Louise Engels, geb. Noot | 1792-10-25 | Barmen | :x: |
068 | Johann Caspar Engels | 1813-07-04 | Barmen | :x: |
071 | Johann Caspar Engels | 1813-11-12 | Barmen | :x: |
075 | Johann Caspar Engels | 1814-02-03 | Barmen | :x: |
130 | Friedrich Engels sen. | 1816-09-21 | Barmen | :x: |
169 | Friedrich Engels sen. | 1818-07-03/04 | Barmen | :x: |
235a | Friedrich Engels sen. | 1820-12-01 | Barmen | :x: |
255 | Friedrich Engels sen. | 1822-07-09 | Barmen | :x: |
265 | Friedrich Engels sen. | 1823-05-31 | Barmen | :x: |
284 | Gerhard Bernhard van Haar | 1826-04-20 | Hamm | :x: |
294 | Friedrich Engels sen. | 1827-08-16 | Paris | :x: |
306 | Friedrich Engels sen. | 1838-07-26 | London | :x: |
307 | Friedrich Engels sen. | 1838-08-11 | Bremen | :x: |
341 | Friedrich Engels sen. | 1858-09-10 | Manchester | :x: |



## Todo

* Add data to json file
* load html files in brief view
* images
* clean syntax
* undefined is not an object (evaluating 'children.join')
* brief view file (?)
* style Themen + Familie Slider + Briefansicht
* conditional `go back` *when on subpages*

## Done

* Framer Motion
* API
* Main Pages
* Import Json
* Header
* Layout
* add some css styles
* Placeholder Briefe
* Camilo Online
* Git Desktop Client Test
* Add Letter Overview


## Markdown Styles

*Hello* `World` **nicely**

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

## Views
All views are in `/components` *unless in file*

`Brief view`
displaying the preview of a *brief*