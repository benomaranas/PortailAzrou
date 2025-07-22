@echo off
echo =========================================
echo    Compilation LaTeX - Rapport PFE
echo    Plateforme Municipale Azrou
echo =========================================
echo.

cd /d "%~dp0\rapport_pfe"

echo [1/4] Premiere compilation pdfLaTeX...
pdflatex -interaction=nonstopmode main.tex
if %errorlevel% neq 0 (
    echo ERREUR lors de la premiere compilation !
    echo Verifiez le fichier main.log pour les details
    pause
    exit /b 1
)

echo [2/4] Compilation bibliographie...
bibtex main
if %errorlevel% neq 0 (
    echo Attention: Erreur bibliographie (peut etre normale si pas de citations)
)

echo [3/4] Deuxieme compilation pdfLaTeX...
pdflatex -interaction=nonstopmode main.tex
if %errorlevel% neq 0 (
    echo ERREUR lors de la deuxieme compilation !
    echo Verifiez le fichier main.log pour les details
    pause
    exit /b 1
)

echo [4/4] Troisieme compilation pdfLaTeX (finalisation)...
pdflatex -interaction=nonstopmode main.tex
if %errorlevel% neq 0 (
    echo ERREUR lors de la compilation finale !
    echo Verifiez le fichier main.log pour les details
    pause
    exit /b 1
)

echo.
echo =========================================
echo    COMPILATION REUSSIE ! 
echo    Fichier genere : main.pdf
echo =========================================
echo.

if exist main.pdf (
    echo Ouverture du PDF...
    start main.pdf
) else (
    echo Le fichier PDF n'a pas ete trouve !
)

pause
