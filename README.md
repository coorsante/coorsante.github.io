# Site Coorsanté

Site vitrine une page de Coorsanté (Jennifer Ramos, coordination de Maisons de Santé – Comines / métropole lilloise).
Site statique (HTML/CSS/JS, aucune dépendance) prêt pour **GitHub Pages**.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Page principale (logo animé intégré) |
| `styles.css` | Mise en forme – couleurs modifiables en haut du fichier (`:root`) |
| `script.js` | Animation du logo, menu mobile, apparitions au défilement |
| `mentions-legales.html` | Mentions légales et RGPD (**SIRET, statut et adresse à compléter**) |
| `merci.html` | Page affichée après l'envoi du formulaire |
| `assets/` | Logo vectoriel (SVG), favicon, image de partage réseaux sociaux |
| `.nojekyll` | Indique à GitHub de publier les fichiers tels quels |

## Mise en ligne sur GitHub Pages (≈ 10 minutes)

1. Connectez-vous sur [github.com](https://github.com) (ou créez un compte gratuit).
2. Cliquez sur **New repository**, nommez-le par exemple `coorsante`, laissez-le **Public**, puis **Create repository**.
3. Sur la page du dépôt : **Add file → Upload files**, glissez-déposez **tout le contenu** de ce dossier (y compris le dossier `assets`), puis **Commit changes**.
4. Allez dans **Settings → Pages** : *Source* = **Deploy from a branch**, *Branch* = `main` / `(root)`, puis **Save**.
5. Après 1 à 2 minutes, le site est en ligne à l'adresse `https://VOTRE-PSEUDO.github.io/coorsante/`.

### Utiliser votre propre nom de domaine (ex. coorsante.fr)

1. Dans **Settings → Pages → Custom domain**, saisissez `www.coorsante.fr` puis **Save** (GitHub crée un fichier `CNAME`).
2. Chez votre registraire (OVH, Gandi, IONOS…), ajoutez un enregistrement **CNAME** `www` → `VOTRE-PSEUDO.github.io`.
   Pour le domaine nu (`coorsante.fr`), ajoutez 4 enregistrements **A** : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Cochez **Enforce HTTPS** une fois le certificat disponible.

## Formulaire de contact

Le formulaire utilise [FormSubmit](https://formsubmit.co) (gratuit, sans inscription) et envoie les messages à **coorsante@gmail.com**.
**Important :** lors du tout premier envoi, FormSubmit adresse un e-mail de confirmation à coorsante@gmail.com – cliquez sur le lien d'activation. Les messages suivants arriveront directement.

## Modifier le site

- **Textes** : ouvrez `index.html` sur GitHub, cliquez sur le crayon ✎, modifiez, puis *Commit changes*. Le site se met à jour en 1 minute.
- **Couleurs** : variables en haut de `styles.css`.
- **Ajouter votre portrait** : déposez `assets/portrait.jpg` et insérez `<img src="assets/portrait.jpg" alt="Jennifer Ramos">` dans la section « À propos ».
