#!/bin/bash
# Benötigt leaderboard.txt auf der Standardeingabe.

rsync -vz ~/kommutative-algebra/script.pdf speicherleck.de:/var/www/iblech/stuff/tutor-kommalg/kommalg/skript.pdf

ssh speicherleck.de "
  cd /var/www/iblech/stuff/tutor-kommalg/kommalg/leaderboard || exit
  git pull --rebase
  cabal build
  cd ..
  rm *.html
  ./leaderboard/dist/build/Main/Main > $1.html
"
