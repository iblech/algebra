\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{algsheet}[2009/10/09 LaTeX class]

\LoadClass[a4paper,12pt,pointednumbers]{scrartcl}%

\RequirePackage[headsepline]{scrpage2}
\RequirePackage{array}
\RequirePackage{ifthen}
\RequirePackage{alggerman}
\RequirePackage{algmacros}

\pagestyle{scrheadings}

\renewcommand{\theexercise}{\arabic{exercise}}

\def\alg@sheetname{Übung}
\newcommand{\semester}[1]{\global\def\alg@semester{#1}\ohead{\alg@semester}}
\newcommand{\sheet}[1]{\global\def\alg@sheet{#1}\chead{\alg@sheet}}
\newcommand{\lecture}[1]{\global\def\alg@lecture{#1}\ihead{\alg@lecture}}
\renewcommand{\author}[1]{\global\def\alg@author{#1}}
\renewcommand{\date}[1]{\global\def\alg@date{#1}}

\renewcommand{\maketitle}{%
	\thispagestyle{plain}%
	\noindent
	\begin{minipage}[t]{\textwidth}%
		Lehrstuhl für Algebra und Zahlentheorie\hfill \alg@semester\\
		Prof.~Marc Nieper-Wißkirchen\hfill \alg@author
	\end{minipage}%
	\vskip 3em%
	\begin{center}%
		\textbf{\Large \alg@sheet}%
		\vskip 3em%
		\textbf{\Huge \alg@lecture}%
		\vskip 3em%
		{\Large \alg@date}%
	\end{center}%
	\vskip 3em}

