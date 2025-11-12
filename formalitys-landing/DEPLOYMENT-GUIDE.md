# 🚀 Guide de Déploiement - Formalitys Landing Page

## 📦 Contenu du Package

Votre landing page contient:
- ✅ `index.html` - Page principale (21 KB)
- ✅ `styles.css` - Feuille de styles (10 KB)
- ✅ `script.js` - JavaScript (1.6 KB)
- ✅ `images/` - Dossier avec 10 images
- ✅ `README.md` - Documentation
- ✅ `DEPLOYMENT-GUIDE.md` - Ce guide

## 🎯 Options de Déploiement

### Option 1: System.io (Recommandé pour vous)

#### Méthode A: Page HTML Personnalisée
1. Connectez-vous à System.io
2. Allez dans **Funnels** → **Create New Funnel**
3. Choisissez **Custom HTML Page**
4. Copiez le contenu de `index.html` et collez-le
5. Dans les paramètres de la page:
   - **Custom CSS**: Copiez le contenu de `styles.css`
   - **Custom JavaScript**: Copiez le contenu de `script.js`
6. Uploadez les images dans la bibliothèque média de System.io
7. Mettez à jour les chemins d'images dans le HTML si nécessaire

#### Méthode B: Intégration via iFrame
1. Hébergez d'abord la page ailleurs (voir options ci-dessous)
2. Dans System.io, créez une page
3. Ajoutez un élément **HTML/iFrame**
4. Insérez: `<iframe src="VOTRE_URL" width="100%" height="100%" frameborder="0"></iframe>`

### Option 2: Netlify (Gratuit et Simple)

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit
3. Glissez-déposez le dossier `formalitys-landing` sur Netlify
4. Votre site sera en ligne en quelques secondes!
5. Vous obtiendrez une URL comme: `https://formalitys-xyz.netlify.app`
6. Vous pouvez ensuite connecter votre domaine personnalisé

**Avantages**:
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ Déploiement en 30 secondes
- ✅ Mises à jour faciles

### Option 3: Vercel (Gratuit et Rapide)

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte gratuit
3. Cliquez sur **New Project**
4. Uploadez le dossier ou connectez GitHub
5. Déployez!

**Avantages**:
- ✅ Gratuit
- ✅ Très rapide
- ✅ HTTPS automatique
- ✅ Domaine personnalisé gratuit

### Option 4: GitHub Pages (Gratuit)

1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau repository (ex: `formalitys-landing`)
3. Uploadez tous les fichiers
4. Allez dans **Settings** → **Pages**
5. Activez GitHub Pages
6. Votre site sera sur: `https://votre-username.github.io/formalitys-landing`

### Option 5: Hébergement Nindohost (Votre hébergement actuel)

#### Via cPanel:
1. Connectez-vous à votre cPanel Nindohost
2. Ouvrez **File Manager**
3. Naviguez vers `public_html` ou `www`
4. Créez un dossier (ex: `landing`) ou utilisez la racine
5. Uploadez tous les fichiers:
   - `index.html`
   - `styles.css`
   - `script.js`
   - Dossier `images/` avec toutes les images
6. Accédez à: `https://votre-domaine.com/landing/` ou `https://votre-domaine.com/`

#### Via FTP:
1. Utilisez FileZilla ou un autre client FTP
2. Connectez-vous avec vos identifiants Nindohost
3. Naviguez vers `public_html`
4. Uploadez tous les fichiers
5. Assurez-vous que les permissions sont correctes (644 pour les fichiers, 755 pour les dossiers)

### Option 6: Cloudflare Pages (Gratuit)

1. Allez sur [pages.cloudflare.com](https://pages.cloudflare.com)
2. Créez un compte
3. Uploadez le dossier
4. Déployez!

## 🔗 Configuration du Domaine

### Pour rediriger votre domaine principal:

#### Si vous utilisez Netlify/Vercel:
1. Dans les paramètres du projet, ajoutez votre domaine
2. Mettez à jour les DNS chez votre registrar:
   - Type: `A` → IP fournie par Netlify/Vercel
   - Type: `CNAME` → `www` → URL fournie

#### Si vous utilisez Nindohost:
1. Uploadez dans `public_html` (racine)
2. Votre domaine pointera automatiquement vers `index.html`

## ✅ Checklist Avant Déploiement

- [ ] Vérifiez que tous les liens fonctionnent:
  - [ ] Formulaire SARL: https://form.jotform.com/253077192966569
  - [ ] Formulaire Riad: https://form.jotform.com/252974835935574
  - [ ] WhatsApp: +212 6 20 26 9000
  - [ ] Instagram: @formalitys.maroc
  - [ ] Facebook: formalitys

- [ ] Configurez les formulaires Jotform:
  - [ ] Email de réception: info@formalitys.com
  - [ ] Intégration Stripe pour les paiements
  - [ ] Notifications par email activées

- [ ] Testez sur mobile et desktop
- [ ] Vérifiez que toutes les images s'affichent
- [ ] Testez le bouton WhatsApp flottant

## 🎨 Où Sauvegarder les Images

### Structure recommandée:
```
votre-site/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── IMG-20251112-WA0009.jpg
    ├── IMG-20251112-WA0010.jpg
    ├── IMG-20251112-WA0011.jpg
    ├── IMG-20251112-WA0012.jpg
    ├── IMG-20251112-WA0013.jpg
    ├── IMG-20251112-WA0014.jpg
    ├── IMG-20251112-WA0015.jpg
    ├── IMG-20251112-WA0016.jpg
    ├── IMG-20251112-WA0017.jpg
    └── IMG-20251112-WA0018.jpg
```

**Important**: Le dossier `images/` doit être au même niveau que `index.html`

### Si vous utilisez System.io:
1. Uploadez les images dans la bibliothèque média
2. Remplacez les chemins dans le HTML par les URLs System.io
3. Exemple: `images/photo.jpg` → `https://system.io/media/votre-image.jpg`

## 🔧 Personnalisation Post-Déploiement

### Modifier les informations de contact:
Recherchez dans `index.html`:
- `+212 6 20 26 9000` → Votre numéro WhatsApp
- `info@formalitys.com` → Votre email
- `@formalitys.maroc` → Votre Instagram
- `formalitys` → Votre page Facebook

### Modifier les prix:
Recherchez dans `index.html`:
- `3,300 DH` → Nouveau prix SARL
- `1,600 DH` → Nouveau prix Riad

### Modifier les couleurs:
Dans `styles.css`, recherchez:
- `#FF7A5C` → Couleur principale
- `#1A3D3D` → Couleur secondaire

## 📱 Test de la Page

Avant de mettre en ligne, testez:
1. Ouvrez `index.html` dans votre navigateur
2. Vérifiez tous les liens
3. Testez sur mobile (mode responsive du navigateur)
4. Cliquez sur tous les boutons
5. Vérifiez que le WhatsApp flottant fonctionne

## 🆘 Problèmes Courants

### Les images ne s'affichent pas:
- Vérifiez que le dossier `images/` est au bon endroit
- Vérifiez les permissions (755 pour dossiers, 644 pour fichiers)
- Vérifiez les chemins dans le HTML

### Le CSS ne s'applique pas:
- Vérifiez que `styles.css` est au même niveau que `index.html`
- Videz le cache du navigateur (Ctrl+F5)

### Les formulaires ne fonctionnent pas:
- Vérifiez les URLs Jotform
- Configurez l'email de réception dans Jotform

## 📞 Support

Pour toute question:
- Email: info@formalitys.com
- WhatsApp: +212 6 20 26 9000

## 🎉 Félicitations!

Votre landing page est prête à être déployée! Choisissez l'option qui vous convient le mieux et suivez les étapes ci-dessus.

**Recommandation**: Pour une mise en ligne rapide, utilisez **Netlify** (gratuit, simple, rapide).
