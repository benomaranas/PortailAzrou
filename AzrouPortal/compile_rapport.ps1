# Script PowerShell pour compiler le rapport LaTeX
# Plateforme Municipale Azrou - PFE Anas Benomar

Write-Host "=========================================" -ForegroundColor Green
Write-Host "   Compilation LaTeX - Rapport PFE" -ForegroundColor Green  
Write-Host "   Plateforme Municipale Azrou" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""

# Changer vers le dossier du rapport
Set-Location "rapport_pfe"

# Vérifier que les fichiers existent
if (!(Test-Path "main.tex")) {
    Write-Host "ERREUR: main.tex non trouvé !" -ForegroundColor Red
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

# Fonction pour exécuter pdflatex avec gestion d'erreur
function Invoke-PdfLatex {
    param([string]$message)
    
    Write-Host $message -ForegroundColor Blue
    $result = & pdflatex -interaction=nonstopmode main.tex 2>&1
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERREUR lors de la compilation !" -ForegroundColor Red
        Write-Host "Consultez le fichier main.log pour plus de détails" -ForegroundColor Yellow
        
        # Afficher les dernières lignes du log pour diagnostic
        if (Test-Path "main.log") {
            Write-Host "`nDernières erreurs du log:" -ForegroundColor Yellow
            Get-Content "main.log" | Select-Object -Last 20 | ForEach-Object {
                if ($_ -match "Error|error|!") {
                    Write-Host $_ -ForegroundColor Red
                }
            }
        }
        
        Read-Host "Appuyez sur Entrée pour quitter"
        exit 1
    }
    
    Write-Host "✓ Compilation réussie" -ForegroundColor Green
}

try {
    # Séquence de compilation LaTeX standard
    Invoke-PdfLatex "[1/4] Première compilation pdfLaTeX..."
    
    Write-Host "[2/4] Compilation bibliographie..." -ForegroundColor Blue
    & bibtex main 2>$null
    Write-Host "✓ Bibliographie traitée" -ForegroundColor Green
    
    Invoke-PdfLatex "[3/4] Deuxième compilation pdfLaTeX..."
    Invoke-PdfLatex "[4/4] Troisième compilation pdfLaTeX (finalisation)..."
    
    Write-Host ""
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host "    COMPILATION RÉUSSIE ! 🎉" -ForegroundColor Green
    Write-Host "    Fichier généré : main.pdf" -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host ""
    
    # Ouvrir le PDF si créé
    if (Test-Path "main.pdf") {
        Write-Host "Ouverture du PDF..." -ForegroundColor Blue
        Start-Process "main.pdf"
        
        # Afficher les statistiques du fichier
        $pdfSize = (Get-Item "main.pdf").Length
        $pdfSizeMB = [math]::Round($pdfSize / 1MB, 2)
        Write-Host "Taille du PDF: $pdfSizeMB MB" -ForegroundColor Cyan
        
    } else {
        Write-Host "ATTENTION: Le fichier PDF n'a pas été trouvé !" -ForegroundColor Red
    }
    
} catch {
    Write-Host "ERREUR inattendue: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Vérifiez que LaTeX est correctement installé" -ForegroundColor Yellow
} finally {
    Set-Location ".."
    Read-Host "`nAppuyez sur Entrée pour fermer"
}
