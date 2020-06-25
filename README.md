# Engelsbriefe

### Repo für das Interface der Engels Ausstellung
`https://engels.arrenberg.studio/briefe`


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

Nummer *ID* | Author | Status | Kommentar
--- | --- | --- | ---
1 | Johann Caspar Engels | :x: | noch nichts vorhanden
2 | - | :warning: |
4 | - | :white_check_mark: |


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


## Markdown Styles

*Hello* `World` **nicely**

## Pages

Name | Dir | Kommentar 
--- | --- | --- 
Index | / | should be replaced by briefe
briefe | / | - 
themen | / | -
personen | / | -
[brief] | /briefe | 2nd menu + brief ansichten
[person] | /person | 2nd menu
[thema] | /thema | 2nd menu