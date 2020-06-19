# Engelsbriefe

### Repo für das Interface der Engels Ausstellung
`https://engelsbriefe.arrenberg.studio/`

## Todo

* Add data to json file
* load html files in brief view
* images
* clean syntax
* undefined is not an object (evaluating 'children.join')
* brief view file (?)
* style Themen + Familie Slider + Briefansicht
* conditional `go back` *when on subpages*


## Requirements

* Nodejs
* npm

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
### Check branch
```bash
git fetch
git checkout <BRANCH_NAME>
```
### Create branch
```bash
git checkout -b <BRANCH_NAME>
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

## Done

* Framer Motion
* API
* Main Pages
* Import Json
* Header
* Layout
* add some css styles
* Placeholder Briefe


## Briefe

Nummer *ID* | Author | Status
--- | --- | ---
1 | Johann Caspar Engels | :x:
2 | - | :warning:
3 | - | :heavy_check_mark:
4 | - | :white_check_mark:

## Markdown Styles

*Hello* `World` **nicely**