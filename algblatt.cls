\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{algblatt}[2013/03/29 LaTeX class]

\LoadClass[a4paper,ngerman]{scrartcl}

\RequirePackage[utf8]{inputenc}
\RequirePackage[ngerman]{babel}
\RequirePackage{amsmath,amsthm,amssymb,amscd,color,graphicx}
\RequirePackage[protrusion=true,expansion=true]{microtype}
\RequirePackage{lmodern}
\RequirePackage{hyperref}

\RequirePackage{geometry}
\geometry{tmargin=2cm,bmargin=2cm,lmargin=3.1cm,rmargin=3.1cm}

\setlength\parskip{\medskipamount}
\setlength\parindent{0pt}

\renewcommand{\maketitle}[2]{%
  \thispagestyle{empty}%
  Universität Augsburg \hfill Sommersemester 2013 \\
  Lehrstuhl für Algebra und Zahlentheorie \hfill Ingo Blechschmidt \\
  Prof. Marc Nieper-Wißkirchen \hfill Robert Gelb \\[0em]

  \begin{center}\Large \textbf{Übungsblatt #1 zur Algebra I} \\[1em]
  \normalsize #2
  \end{center}
  \vspace{1.5em}}

\newcounter{aufgabennummer}
\newenvironment{aufgabe}[1]{
  \addtocounter{aufgabennummer}{1}
  \textbf{Aufgabe \theaufgabennummer.} \emph{#1} \par
}{\vspace{2.0em}}

\renewcommand*\theenumi{\alph{enumi}}
\renewcommand{\labelenumi}{\theenumi)}

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
\newcommand{\C}{\mathcal{C}}
\newcommand{\CC}{\mathbb{C}}
\newcommand{\NN}{\mathbb{N}}
\newcommand{\QQ}{\mathbb{Q}}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\ZZ}{\mathbb{Z}}
\newcommand{\Hom}{\mathrm{Hom}}
\newcommand{\id}{\mathrm{id}}
\newcommand{\GL}[1]{\operatorname{GL}(#1)}
