@echo off
echo =========================================
echo   Generateur PowerPoint PFE - Azrou
echo   Plateforme Municipale Numerique
echo =========================================
echo.

echo [1/3] Verification de Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERREUR: Python n'est pas installe ou pas dans le PATH
    echo Veuillez installer Python depuis https://python.org
    pause
    exit /b 1
)
echo Python detecte ✓

echo.
echo [2/3] Installation du module python-pptx...
pip install python-pptx
if %errorlevel% neq 0 (
    echo ERREUR: Impossible d'installer python-pptx
    pause
    exit /b 1
)
echo Module python-pptx installe ✓

echo.
echo [3/3] Generation de la presentation PowerPoint...
python generate_presentation.py
if %errorlevel% neq 0 (
    echo ERREUR: Echec de la generation
    pause
    exit /b 1
)

echo.
echo =========================================
echo   PRESENTATION GENEREE AVEC SUCCES!
echo =========================================
echo.
echo Le fichier PowerPoint a ete cree dans ce dossier
echo Nom: Presentation_PFE_Azrou_Anas_BENOMAR.pptx
echo.
echo PROCHAINES ETAPES:
echo 1. Ouvrir le fichier PowerPoint
echo 2. Ajouter vos screenshots
echo 3. Personnaliser le design
echo 4. Repeter votre presentation!
echo.

pause
