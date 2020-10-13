# Git Commands for Engelsbriefe

## Git Commands

### set up 
```bash
git init
git clone https://github.com/j0hannr/engels-briefe.git
# make sure you are always in the *engels-briefe* directory to execute git and nodejs
cd engels-briefe
npm install
```
### check master
```bash
git pull origin master
```
### create branch
```bash
git checkout -b <BRANCH_NAME>
```
### check branch
```bash
git fetch
git checkout <BRANCH_NAME>
```
### update branch
```bash
# update branch internally
git pull 
# update from master
git merge origin/master
```
### trash local changes
```bash
# particular file
git checkout -- <FILENAME>
# all files
git checkout -- .
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