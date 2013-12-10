\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{algblatt}[2013/03/29 LaTeX class]

\LoadClass[a4paper,ngerman]{scrartcl}

\RequirePackage[utf8]{inputenc}
\RequirePackage[ngerman]{babel}
\RequirePackage{amsmath,amsthm,amssymb,amscd,color,graphicx,environ}
\RequirePackage{framed}
\RequirePackage[protrusion=true,expansion=true]{microtype}
\RequirePackage{multicol}
\RequirePackage{lmodern}
\RequirePackage{hyperref}

\RequirePackage{geometry}
\geometry{tmargin=2cm,bmargin=2cm,lmargin=3.1cm,rmargin=3.1cm}

\setlength\parskip{\medskipamount}
\setlength\parindent{0pt}

\newif\ifloesungen\loesungenfalse
\newif\ifpruefung\pruefungfalse

\newlength{\titleskip}
\setlength{\titleskip}{1.5em}
\renewcommand{\maketitle}[2]{%
  \ifloesungen\else\pagestyle{empty}\fi%
  Universität Augsburg \hfill Wintersemester 2013/2014 \\
  Lehrstuhl für Algebra und Zahlentheorie \\
  Prof. Marc Nieper-Wißkirchen \\
  Ingo Blechschmidt \\[0em]

  \begin{center}\Large \textbf{Übungsblatt #1 zur Algebra II} \\[1em]
  \normalsize #2
  \end{center}
  \vspace{\titleskip}}

\renewcommand*\theenumi{\alph{enumi}}
\renewcommand{\labelenumi}{\theenumi)}

\newlength{\aufgabenskip}
\setlength{\aufgabenskip}{1.5em}
\newcounter{aufgabennummer}
\newenvironment{aufgabe}[2]{
  \addtocounter{aufgabennummer}{1}
  \textbf{Aufgabe \theaufgabennummer{}.} (#1) \emph{#2} \par
}{\vspace{\aufgabenskip}}
\newenvironment{aufgabeE}[2]{\begin{aufgabe}{#1}{#2}\begin{enumerate}}{\end{enumerate}\end{aufgabe}}

\definecolor{shadecolor}{rgb}{.93,.93,.93}

\NewEnviron{loesung}{%
  \ifloesungen%
    \begin{shaded}\textbf{Lösung. }\BODY\end{shaded}%
  \fi%
}
\NewEnviron{loesungE}{%
  \ifloesungen%
    \begin{shaded}\textbf{Lösung. }\begin{enumerate}\BODY\end{enumerate}\end{shaded}%
  \fi%
}

\clubpenalty=10000
\widowpenalty=10000
\displaywidowpenalty=10000

\newcommand{\lra}{\longrightarrow}
\newcommand{\lhra}{\ensuremath{\lhook\joinrel\relbar\joinrel\rightarrow}}
\newcommand{\thlra}{\relbar\joinrel\twoheadrightarrow}
\newcommand{\xra}[1]{\xrightarrow{#1}}

\renewcommand{\i}{\mathrm{i}}
\newcommand{\A}{\mathcal{A}}
\newcommand{\B}{\mathcal{B}}
\renewcommand{\aa}{\mathfrak{a}}
\newcommand{\bb}{\mathfrak{b}}
\newcommand{\cc}{\mathfrak{c}}
\newcommand{\mm}{\mathfrak{m}}
\newcommand{\C}{\mathcal{C}}
\renewcommand{\O}{\mathcal{O}}
\newcommand{\CC}{\mathbb{C}}
\newcommand{\NN}{\mathbb{N}}
\newcommand{\QQ}{\mathbb{Q}}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\ZZ}{\mathbb{Z}}
\newcommand{\AAA}{\mathrm{A}}
\newcommand{\SSS}{\mathrm{S}}
\newcommand{\OOO}{\mathrm{O}}
\newcommand{\SO}{\mathrm{SO}}
\newcommand{\CCC}{\mathrm{C}}
\newcommand{\DDD}{\mathrm{D}}
\newcommand{\ZZZ}{\mathrm{Z}}
\newcommand{\Hom}{\mathrm{Hom}}
\newcommand{\Aut}{\mathrm{Aut}}
\newcommand{\id}{\mathrm{id}}
\newcommand{\GL}{\mathrm{GL}}
\newcommand{\Gal}{\mathrm{Gal}}
\DeclareMathOperator{\sgn}{sgn}
\DeclareMathOperator{\ord}{ord}

\newcommand{\gra}[2]{[#1:#2]}
