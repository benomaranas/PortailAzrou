#!/bin/bash
# Script pour créer un archive compatible Overleaf

echo "Création de l'archive pour Overleaf..."

# Créer un dossier temporaire
mkdir -p overleaf_project

# Copier tous les fichiers LaTeX
cp -r rapport_pfe/* overleaf_project/

# Créer une archive ZIP
if command -v zip &> /dev/null; then
    zip -r "Rapport_PFE_Azrou.zip" overleaf_project/
    echo "Archive créée : Rapport_PFE_Azrou.zip"
else
    echo "Veuillez créer une archive ZIP du dossier overleaf_project"
fi

echo "Projet prêt pour Overleaf !"
echo "1. Allez sur https://www.overleaf.com/"
echo "2. Créez un compte gratuit"
echo "3. Cliquez sur 'New Project' > 'Upload Project'"
echo "4. Uploadez le fichier Rapport_PFE_Azrou.zip"
echo "5. Compilez avec pdfLaTeX"
