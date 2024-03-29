#!/bin/bash
echo "Welcome to MyReactApp"
cd ../
echo "Stashing un-pushed changes"
git reset --soft HEAD~
git stash pop
echo "Resetting HEAD to origin/main"
git checkout main
git reset --hard HEAD~
git fetch --all
if ! git pull
then
  echo "ERROR: During pull from GitFarm. Exiting"
  exit 1
fi

echo "Cleaning build directory"
rm -rf dist/*

echo "Initiating npm build"
if ! npm run build
then
  echo "ERROR: npm build failed. EXITING"
  exit 1
fi
ls -lt
git status

