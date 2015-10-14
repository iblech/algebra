{-# LANGUAGE QuasiQuotes #-}
module Main where

import Data.List
import Data.Monoid
import Data.Ord
import Text.Blaze.Html.Renderer.String
import MyHamlet

data Algebraist = MkAlgebraist
    { name   :: String
    , url    :: String
    , awards :: [String]
    , sheets :: [Bool]
    }
    deriving (Show,Eq,Read)

longestStreak :: Algebraist -> Int
longestStreak = maximum . streaks

currentStreak :: Algebraist -> Int
currentStreak = last . streaks

streaks :: Algebraist -> [Int]
streaks = (0:) . map (length . filter id) . group . sheets

strength :: Algebraist -> Algebraist -> Ordering
strength = mconcat
    [ flip (comparing longestStreak)
    , flip (comparing currentStreak)
    , comparing name
    ]

main :: IO ()
main = putStrLn . renderHtml . renderLeaderboard . read =<< readFile "leaderboard.txt"

renderAlgebraist p = [hamlet|
  <tr>
    <td>
      <a href="#{url p}">#{name p}
    <td>
      $forall sheet <- sheets p
        $if sheet
          <span class="rect success">■
        $else
          <span class="rect failure">■
    <td>#{longestStreak p}
    <td>#{currentStreak p}
    <td>#{concat $ intersperse ", " $ awards p}
|]

renderLeaderboard ps = let _ = sortBy strength ps in [hamlet|
$doctype 5
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>Kommutative Algebra
    <link rel="shortcut icon" href="images/heart.ico">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&amp;subset=latin,latin-ext">
    <style type="text/css">
      body {
        font-size: 15px;
        line-height: 24px;
        font-weight: lighter;
        font-family: Ubuntu, sans-serif;
        text-align: center;
      }
      h1 { margin: 1em 0 0.5em 0; font-weight:normal; }
      td, th { padding: 6px; }
      th { background-color: #2d1630; color: white; }
      td:first-child { font-weight: bold; }
      table { margin-left: auto; margin-right: auto; text-align: left; }
      .moral { border: 3px solid #2d1630; width: 18em; margin-left: auto; margin-right: auto; }
      .moral em { font-style: normal; }
      .remark { width: 44em; margin-left: auto; margin-right: auto; }
      .rect { font-size: 200%; }
      .success { color: #44a340; }
      .failure { color: #eeeeee; }
  <body>
    <h1>Kommutative Algebra
    <a href="http://brownsharpie.courtneygibbons.org/?p=1253">
      <img src="../images/love-commute.jpeg" alt="Love makes the diagram commute." style="width: 500px; height: 333px; border: 0">
    <p>
      <em>Du willst deine Übungsblattsträhne verbessern?<br>
      <a href="../uebung00.pdf">Blatt 0
      <br>
      <a href="../uebung01.pdf">Blatt 1
    <div style="text-align: center">
      <iframe name="embed_readwrite" src="http://etherpad.wikimedia.org/p/kommutative-algebra-rueckmeldung?showControls=true&amp;showChat=false&amp;showLineNumbers=false&amp;useMonospaceFont=false" style="width: 80%; height: 20em;">
      <p>
        <a href="http://etherpad.wikimedia.org/p/kommutative-algebra-rueckmeldung">
          Eingebettetes Pad funktioniert nicht? Direkt zum Pad.
    <p class="moral">
      Whenever you meet a <em>functor</em>,<br>
      ask “What is its <em>codensity monad</em>?”.
|]

{-
    <table>
      <tr>
        <th>AlgebraikerIn
        <th>Abgaben
        <th>längste Strähne
        <th>aktuelle Strähne
        <th>besondere Auszeichnungen
      $forall p <- sortBy strength ps
        ^{renderAlgebraist p}
-}
