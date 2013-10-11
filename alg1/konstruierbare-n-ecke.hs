-- Programm, um für n <= 100 die konstruierbaren n-Ecke zu berechnen.
module Main where

-- 0-te Approximation
fermatPrimes = [3,5,17]

constructiblePolygons = do
    r  <- [0..7]
    ps <- powerList fermatPrimes
    return $ 2^r * product ps

powerList :: [a] -> [[a]]
powerList [] = [[]]
powerList (x:xs) = let yss = powerList xs in yss ++ map (x:) yss
