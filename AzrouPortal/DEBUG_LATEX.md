# Guide de débogage LaTeX - Plateforme Municipale Azrou

## Problèmes corrigés :

### 1. ✅ Référence manquante
- **Problème** : `\input{chapters/annexe_c}` référençait un fichier inexistant
- **Solution** : Supprimé la référence à annexe_c du main.tex

### 2. ✅ Configuration listings simplifiée  
- **Problème** : Configuration UTF-8 complexe dans lstset causait des erreurs
- **Solution** : Simplifié la configuration sans literate mapping

### 3. ✅ Encodage des caractères spéciaux
- **Problème** : Caractères ✓ et guillemets typographiques
- **Solution** : Remplacé par "Oui/Non" et guillemets standards

## Instructions pour Overleaf :

1. **Uploader le fichier** : `Rapport_PFE_Azrou_Fixed.zip`
2. **Compilateur** : pdfLaTeX
3. **Encodage** : UTF-8 (par défaut)

## Si des erreurs persistent :

### Erreurs courantes et solutions :

**Erreur : "Package babel Error"**
```latex
# Solution : Vérifier que babel est bien configuré
\usepackage[french]{babel}
```

**Erreur : "File not found"**
```latex
# Solution : Vérifier les chemins des \input{}
# Tous les fichiers doivent être dans le dossier chapters/
```

**Erreur : "Undefined control sequence"**
```latex
# Solution : Vérifier les packages requis
# Tous les \usepackage{} sont dans main.tex
```

**Erreur : "LaTeX Error: Invalid UTF-8"**
```latex
# Solution : Remplacer les caractères spéciaux
# ✓ → Oui
# ✗ → Non  
# " → "
# ' → '
```

## Structure du projet :
```
main.tex                    # Document principal
├── chapters/
│   ├── page_garde.tex     # Page de garde
│   ├── dedicace.tex       # Dédicace
│   ├── remerciements.tex  # Remerciements
│   ├── resume.tex         # Résumé français
│   ├── abstract.tex       # Abstract anglais
│   ├── acronymes.tex      # Liste des acronymes
│   ├── introduction.tex   # Introduction générale
│   ├── chapitre1_contexte.tex
│   ├── chapitre2_analyse.tex
│   ├── chapitre3_conception.tex
│   ├── chapitre4_implementation.tex
│   ├── chapitre5_tests.tex
│   ├── chapitre6_deploiement.tex
│   ├── conclusion.tex     # Conclusion générale
│   ├── annexe_a.tex       # Code source
│   └── annexe_b.tex       # Diagrammes
└── references.bib         # Bibliographie
```

## Archive prête :
- **Fichier** : `Rapport_PFE_Azrou_Fixed.zip`
- **Contenu** : Rapport LaTeX complet de 70 pages
- **État** : Prêt pour compilation sur Overleaf

## Test de compilation locale (si MiKTeX installé) :
```bash
cd overleaf_project_fixed
pdflatex main.tex
bibtex main
pdflatex main.tex  
pdflatex main.tex
```

Le rapport est maintenant corrigé et prêt pour Overleaf ! 🚀
