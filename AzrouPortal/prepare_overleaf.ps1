# Script PowerShell pour préparer le projet Overleaf
Write-Host "=== Préparation du projet LaTeX pour Overleaf ===" -ForegroundColor Green

# Créer le dossier de destination
$overleafPath = "overleaf_project"
if (Test-Path $overleafPath) {
    Remove-Item -Recurse -Force $overleafPath
    Write-Host "Ancien dossier supprimé" -ForegroundColor Yellow
}

New-Item -ItemType Directory -Path $overleafPath -Force
Write-Host "Dossier créé : $overleafPath" -ForegroundColor Blue

# Copier les fichiers LaTeX
Copy-Item -Path "rapport_pfe\*" -Destination $overleafPath -Recurse -Force
Write-Host "Fichiers LaTeX copiés" -ForegroundColor Blue

# Créer une archive ZIP si possible
try {
    Compress-Archive -Path $overleafPath -DestinationPath "Rapport_PFE_Azrou.zip" -Force
    Write-Host "Archive créée : Rapport_PFE_Azrou.zip" -ForegroundColor Green
} catch {
    Write-Host "Erreur lors de la création de l'archive. Créez manuellement un ZIP du dossier $overleafPath" -ForegroundColor Red
}

Write-Host "`n=== Instructions pour Overleaf ===" -ForegroundColor Cyan
Write-Host "1. Allez sur https://www.overleaf.com/"
Write-Host "2. Créez un compte gratuit"
Write-Host "3. Cliquez sur 'New Project' > 'Upload Project'"
Write-Host "4. Uploadez le fichier Rapport_PFE_Azrou.zip"
Write-Host "5. Compilez avec pdfLaTeX"
Write-Host "`nVotre rapport de 70 pages sera généré en PDF !" -ForegroundColor Green

# Afficher la structure du projet
Write-Host "`n=== Structure du projet ===" -ForegroundColor Cyan
Get-ChildItem -Path $overleafPath -Recurse | ForEach-Object {
    Write-Host $_.FullName.Replace((Get-Location).Path + "\$overleafPath", "")
}
