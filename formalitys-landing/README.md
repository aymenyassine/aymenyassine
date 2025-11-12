# Formalitys Landing Page

Landing page pour Formalitys - Services de création de société et régularisation au Maroc.

## 📁 Structure des fichiers

```
formalitys-landing/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript pour les interactions
├── images/             # Dossier pour les images
│   └── *.jpg          # Images extraites du RAR
└── README.md          # Ce fichier
```

## 🎨 Design

La page utilise les couleurs suivantes:
- **Coral/Orange principal**: `#FF7A5C`
- **Dark Teal**: `#1A3D3D`
- **Vert (checkmarks)**: `#10b981`
- **WhatsApp vert**: `#25D366`

## 📋 Sections de la page

1. **Hero Section** - En-tête avec logo et proposition de valeur
2. **Pourquoi choisir Formalitys** - 6 avantages clés
3. **Badge Trustpilot** - Preuve sociale
4. **Processus en 4 étapes** - Comment ça marche
5. **Partenaires** - Logo Attijari Bank
6. **Services** - 2 offres principales:
   - Création SARL (3,300 DH) → Formulaire: https://form.jotform.com/253077192966569
   - Régularisation Airbnb/Riad (1,600 DH) → Formulaire: https://form.jotform.com/252974835935574
7. **Contact** - Réseaux sociaux et WhatsApp
8. **Bouton WhatsApp flottant** - Toujours visible

## 📱 Informations de contact

- **WhatsApp**: +212 6 20 26 9000
- **Email**: info@formalitys.com
- **Instagram**: @formalitys.maroc
- **Facebook**: formalitys

## 🚀 Déploiement

### Option 1: Hébergement simple (HTML/CSS/JS)
Vous pouvez héberger cette page sur n'importe quel service d'hébergement web:
- **Netlify**: Glissez-déposez le dossier
- **Vercel**: Connectez via Git ou glissez-déposez
- **GitHub Pages**: Poussez vers un repo GitHub
- **Hébergement traditionnel**: Uploadez via FTP

### Option 2: System.io
Pour intégrer dans System.io:
1. Copiez le contenu de `index.html`
2. Dans System.io, créez une nouvelle page
3. Utilisez l'éditeur HTML personnalisé
4. Collez le code HTML
5. Ajoutez le CSS dans la section "Custom CSS"
6. Ajoutez le JavaScript dans la section "Custom JS"

### Option 3: Hébergement actuel (Nindohost)
1. Connectez-vous à votre cPanel/FTP
2. Uploadez tous les fichiers dans le dossier `public_html` ou `www`
3. Les images doivent être dans le sous-dossier `images/`

## 📸 Images

Les images sont stockées dans le dossier `images/`. Si vous déplacez les fichiers, assurez-vous que:
- Le dossier `images/` est au même niveau que `index.html`
- Tous les fichiers `.jpg` sont présents

**Note**: Les images actuelles sont des captures d'écran. Pour une meilleure qualité, vous pouvez:
1. Créer des icônes SVG personnalisées
2. Utiliser des photos professionnelles
3. Optimiser les images existantes

## 🔧 Personnalisation

### Modifier les couleurs
Dans `styles.css`, recherchez et remplacez:
- `#FF7A5C` - Couleur principale coral
- `#1A3D3D` - Couleur dark teal
- `#10b981` - Couleur verte des checkmarks

### Modifier les textes
Tous les textes sont dans `index.html`. Recherchez et modifiez directement.

### Modifier les liens
- Formulaire SARL: Ligne avec `https://form.jotform.com/253077192966569`
- Formulaire Riad: Ligne avec `https://form.jotform.com/252974835935574`
- WhatsApp: Ligne avec `https://wa.me/212620269000`

## ✅ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations au scroll
- ✅ Bouton WhatsApp flottant
- ✅ Liens vers formulaires Jotform
- ✅ Liens réseaux sociaux
- ✅ Navigation smooth scroll
- ✅ Optimisé pour la conversion

## 📝 Notes importantes

1. **Email de réception**: Les formulaires Jotform doivent être configurés pour envoyer à `info@formalitys.com`
2. **Paiement**: Mentionné dans la conversation que le paiement doit être fait avant les derniers justificatifs
3. **Stripe**: Intégration Stripe mentionnée - à configurer dans Jotform ou System.io

## 🌐 Compatibilité navigateurs

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

Pour toute question sur cette landing page, contactez le développeur ou l'équipe Formalitys.
