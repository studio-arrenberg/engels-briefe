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

## Done

* Framer Motion
* API
* Main Pages
* Import Json
* Header
* Layout
* add some css styles
* Placeholder Briefe


## Requirements

* Nodejs
* npm

## React Commands
Start localhost server
```bash
npm run dev
```

## Git Commands

### Set up 
```bash
git init
git clone https://github.com/j0hannr/engels-briefe.git
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

## Useless Table

Markdown | Less | Pretty
--- | --- | ---
*Hello* | `World` | **nicely**
1 | 2 | 3
a | b | c