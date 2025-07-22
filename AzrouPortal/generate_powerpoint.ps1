# Script PowerShell pour générer la présentation PFE
# Plateforme Municipale Azrou - Anas BENOMAR

Write-Host "🎯 Générateur PowerPoint PFE - Plateforme Municipale Azrou" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Blue
Write-Host ""

# Fonction pour vérifier Python
function Test-PythonInstallation {
    try {
        $pythonVersion = python --version 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Python détecté: $pythonVersion" -ForegroundColor Green
            return $true
        }
    } catch {
        Write-Host "❌ Python non trouvé dans le PATH" -ForegroundColor Red
        return $false
    }
    return $false
}

# Fonction pour installer python-pptx
function Install-PythonPptx {
    Write-Host "📦 Installation du module python-pptx..." -ForegroundColor Blue
    
    try {
        $output = pip install python-pptx 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Module python-pptx installé avec succès" -ForegroundColor Green
            return $true
        } else {
            Write-Host "❌ Erreur lors de l'installation: $output" -ForegroundColor Red
            return $false
        }
    } catch {
        Write-Host "❌ Impossible d'exécuter pip: $_" -ForegroundColor Red
        return $false
    }
}

# Fonction pour générer la présentation
function Generate-Presentation {
    Write-Host "🚀 Génération de la présentation PowerPoint..." -ForegroundColor Blue
    
    try {
        $output = python generate_modern_presentation.py 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host $output -ForegroundColor White
            return $true
        } else {
            Write-Host "❌ Erreur lors de la génération:" -ForegroundColor Red
            Write-Host $output -ForegroundColor Yellow
            return $false
        }
    } catch {
        Write-Host "❌ Impossible d'exécuter le script Python: $_" -ForegroundColor Red
        return $false
    }
}

# Fonction pour ouvrir la présentation
function Open-Presentation {
    $pptxFile = "Modern_Animated_Presentation_Azrou_Platform_2025.pptx"
    
    if (Test-Path $pptxFile) {
        Write-Host "📂 Ouverture de la présentation..." -ForegroundColor Blue
        try {
            Start-Process $pptxFile
            Write-Host "✅ Présentation ouverte dans PowerPoint" -ForegroundColor Green
        } catch {
            Write-Host "⚠️ Impossible d'ouvrir automatiquement. Ouvrez manuellement: $pptxFile" -ForegroundColor Yellow
        }
    } else {
        Write-Host "❌ Fichier de présentation non trouvé: $pptxFile" -ForegroundColor Red
    }
}

# Script principal
try {
    # Vérification Python
    if (-not (Test-PythonInstallation)) {
        Write-Host "🔧 Solutions:" -ForegroundColor Yellow
        Write-Host "1. Installer Python depuis https://python.org" -ForegroundColor White
        Write-Host "2. Vérifier que Python est dans le PATH système" -ForegroundColor White
        Write-Host "3. Redémarrer PowerShell après installation" -ForegroundColor White
        Read-Host "Appuyez sur Entrée pour quitter"
        exit 1
    }
    
    # Installation du module
    if (-not (Install-PythonPptx)) {
        Write-Host "🔧 Solutions:" -ForegroundColor Yellow
        Write-Host "1. Vérifier la connexion Internet" -ForegroundColor White
        Write-Host "2. Exécuter en tant qu'administrateur" -ForegroundColor White
        Write-Host "3. Essayer: python -m pip install python-pptx" -ForegroundColor White
        Read-Host "Appuyez sur Entrée pour quitter"
        exit 1
    }
    
    # Génération de la présentation
    if (Generate-Presentation) {
        Write-Host ""
        Write-Host "🎉 SUCCÈS!" -ForegroundColor Green -BackgroundColor Black
        Write-Host "=" * 40 -ForegroundColor Green
        
        # Informations sur le fichier généré
        $pptxFile = "Modern_Animated_Presentation_Azrou_Platform_2025.pptx"
        if (Test-Path $pptxFile) {
            $fileSize = (Get-Item $pptxFile).Length
            $fileSizeKB = [math]::Round($fileSize / 1KB, 1)
            Write-Host "📄 Fichier: $pptxFile" -ForegroundColor Cyan
            Write-Host "📏 Taille: $fileSizeKB KB" -ForegroundColor Cyan
            Write-Host "📅 Créé: $((Get-Item $pptxFile).CreationTime)" -ForegroundColor Cyan
        }
        
        Write-Host ""
        Write-Host "📋 CONTENU DE LA PRÉSENTATION:" -ForegroundColor Blue
        Write-Host "• 32+ slides professionnelles animées" -ForegroundColor White
        Write-Host "• Design moderne avec dégradés de couleurs" -ForegroundColor White
        Write-Host "• Slide dédiée pour vidéo de démonstration" -ForegroundColor White
        Write-Host "• Animations et effets visuels avancés" -ForegroundColor White
        Write-Host "• Présentation entièrement en anglais" -ForegroundColor White
        Write-Host "• Architecture technique détaillée" -ForegroundColor White
        
        Write-Host ""
        Write-Host "🎯 PROCHAINES ÉTAPES:" -ForegroundColor Blue
        Write-Host "1. ✅ Ouvrir la présentation PowerPoint" -ForegroundColor White
        Write-Host "2. 📸 Ajouter vos captures d'écran de l'application" -ForegroundColor White
        Write-Host "3. 🎨 Personnaliser le design et les couleurs" -ForegroundColor White
        Write-Host "4. 📊 Ajouter vos diagrammes techniques" -ForegroundColor White
        Write-Host "5. 🎭 Ajouter des animations et transitions" -ForegroundColor White
        Write-Host "6. 🗣️ Répéter votre présentation (20-25 min)" -ForegroundColor White
        
        Write-Host ""
        Write-Host "💡 CONSEILS POUR LA SOUTENANCE:" -ForegroundColor Yellow
        Write-Host "• Préparer une démonstration live de l'application" -ForegroundColor White
        Write-Host "• Anticiper les questions sur l'architecture technique" -ForegroundColor White
        Write-Host "• Mettre l'accent sur l'impact social du projet" -ForegroundColor White
        Write-Host "• Préparer des exemples concrets d'utilisation" -ForegroundColor White
        
        # Proposer d'ouvrir la présentation
        Write-Host ""
        $openChoice = Read-Host "🤔 Voulez-vous ouvrir la présentation maintenant? (O/N)"
        if ($openChoice -match '^[Oo]') {
            Open-Presentation
        }
        
    } else {
        Write-Host "❌ Échec de la génération de la présentation" -ForegroundColor Red
        Write-Host "Consultez les messages d'erreur ci-dessus pour diagnostiquer le problème" -ForegroundColor Yellow
    }
    
} catch {
    Write-Host "❌ Erreur inattendue: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Stack trace: $($_.ScriptStackTrace)" -ForegroundColor Yellow
} finally {
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour fermer"
}
