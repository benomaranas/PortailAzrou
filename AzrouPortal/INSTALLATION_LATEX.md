# Guide d'installation LaTeX local (GRATUIT)
# Rapport PFE - Plateforme Municipale Azrou

## 🎯 Méthode recommandée : MiKTeX

### Installation MiKTeX :

1. **Télécharger MiKTeX** :
   - Aller sur : https://miktex.org/download
   - Télécharger "Basic MiKTeX 64-bit Installer"
   - Taille : ~200MB

2. **Installer MiKTeX** :
   - Exécuter l'installeur **en tant qu'administrateur**
   - Choisir "Install MiKTeX for: **all users**"
   - Répertoire d'installation : garder par défaut
   - Settings : **Yes** pour installer packages manquants automatiquement

3. **Redémarrer le terminal** après installation

### Vérification de l'installation :

```cmd
# Ouvrir PowerShell et tester :
pdflatex --version
bibtex --version
```

## 🚀 Compilation de votre rapport :

### Méthode 1 : Script automatique
```cmd
# Double-cliquer sur :
compile_rapport.bat
# OU
compile_rapport.ps1
```

### Méthode 2 : Commandes manuelles
```cmd
cd rapport_pfe
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

## 🛠️ Dépannage des erreurs courantes :

### Erreur : "pdflatex n'est pas reconnu"
**Solution** : 
1. Redémarrer le terminal
2. Vérifier que MiKTeX est dans le PATH
3. Relancer l'installeur si nécessaire

### Erreur : "Package not found"
**Solution** :
- MiKTeX télécharge automatiquement les packages manquants
- Si problème, ouvrir "MiKTeX Console" → Update

### Erreur : "File not found"
**Solution** :
- Vérifier que tous les fichiers .tex sont présents
- Vérifier les chemins dans \input{}

### Erreur de compilation
**Solution** :
1. Consulter le fichier `main.log`
2. Chercher les lignes avec "Error" ou "!"
3. Corriger les erreurs LaTeX

## 📊 Statistiques de votre rapport :

- **Pages** : 70 pages complètes
- **Chapitres** : 6 + introduction + conclusion
- **Annexes** : 2 (code source + diagrammes)
- **Bibliographie** : 25+ références
- **Taille estimée** : 2-3 MB

## ✅ Fichiers prêts :

- ✅ `main.tex` - Document principal corrigé
- ✅ `compile_rapport.bat` - Script Windows
- ✅ `compile_rapport.ps1` - Script PowerShell avancé
- ✅ Tous les chapitres et annexes
- ✅ `references.bib` - Bibliographie complète

## 🎯 Après compilation réussie :

Le fichier `main.pdf` sera généré dans le dossier `rapport_pfe/`
- Votre rapport PFE complet de 70 pages
- Prêt pour impression et soumission académique

---

**Temps d'installation** : 10-15 minutes
**Temps de compilation** : 30-60 secondes
**Coût** : 100% GRATUIT ! 🆓
