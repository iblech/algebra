#!/bin/bash
# Benötigt leaderboard.txt auf der Standardeingabe.

ssh speicherleck.de "
  cd /var/www/iblech/stuff/tutor-kommalg/kommalg/leaderboard || exit
  git pull --rebase
  cabal build
  cd ..
  rm *.html
  ./leaderboard/dist/build/Main/Main > $1.html
"
