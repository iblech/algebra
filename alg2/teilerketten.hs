module Main where

import Control.Monad

divisors n = [ m | m <- [1..n], n `mod` m == 0 ]

chains n = do
    k <- divisors n
    if k == 1 then return [n] else do
    ks <- chains (n `div` k)
    guard $ all ((== 0) . (`mod` k)) ks
    return (k:ks)
