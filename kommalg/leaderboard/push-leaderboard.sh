#!/bin/bash

gpg -d leaderboard.txt.gpg | ssh speicherleck.de "
  cd /var/www/iblech/stuff/tutor-kommalg/kommalg/leaderboard || exit
  git pull --rebase
  cabal build
  rm *.html
  ./dist/build/Main/Main > $1.html
"
