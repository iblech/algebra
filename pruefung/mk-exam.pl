#!/usr/bin/perl

use warnings;
use strict;

use File::Slurp;

sub extract_exercise {
  my ($sheet, $no) = @_;

  open my $fh, "<", "../uebung$sheet.tex" or die $!;

  my $in_no       = 0;
  my $in_exercise = 0;
  my $text;
  while(my $line = <$fh>) {
    $in_no++, $in_exercise = 1 if $line =~ /\\begin{aufgabe/;

    $text .= $line if $in_exercise and $in_no == $no;

    $in_exercise = 0 if $line =~ /\\end{aufgabe/;
  }

  die unless defined $text;
  die if $in_exercise;

  return "\\setcounter{blattnummer}{$sheet}\\setcounter{aufgabennummer}{@{[$no-1]}}$text";
}

my $thema = shift @ARGV;
my @exs = map { [split /,/, $_] } @ARGV;

my $template = read_file "pruefung.tex";

$template =~ s/__THEMA__/$thema/g;
$template =~ s/__AUFGABEN__/
    join "\n\n", map { extract_exercise($_->[0], $_->[1]) } @exs
/eg;

print $template;
