#!/usr/bin/perl

use warnings;
use strict;

my @perms = qw<
  xyz{
  {xyz
  x{yz
  xy{z
  xzy{
  {xzy
  x{zy
  xz{y
  yxz{
  {yxz
  y{xz
  yx{z
  yzx{
  {yzx
  y{zx
  yz{x
  {zxy
  zxy{
  z{xy
  zx{y
  {zyx
  zyx{
  z{yx
  zy{x
>;

my $p0 = "xy+z~+xyz~";

for my $s (@perms) {
  my @ss = split //, $s;
  my $p = uc $p0;
  $p =~ s/{/~/g;
  $p =~ s/X/$ss[0]/g;
  $p =~ s/Y/$ss[1]/g;
  $p =~ s/Z/$ss[2]/g;
  $p =~ s/~/$ss[3]/g;
  my @pp = sort { $a eq "xyz{" ? 1 : $b eq "xyz{" ? -1 : $a cmp $b } map { join "", sort(split //, $_) } split /\+/, $p;
  $p = join " + ", @pp;
  $p =~ s/{/w/g;
  $s =~ s/{/w/g;
  print "\$$s\$ & \$$p\$ \\\\\n";
}
