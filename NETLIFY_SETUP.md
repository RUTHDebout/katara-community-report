# Netlify Configuration

Voici les étapes pour connecter votre dépôt GitHub à Netlify :

## 1. **Accéder à Netlify**
- Allez sur https://app.netlify.com
- Connectez-vous avec votre compte GitHub

## 2. **Créer un nouveau site**
- Cliquez sur "Add new site" → "Import an existing project"
- Autorisez Netlify à accéder à vos dépôts GitHub
- Sélectionnez `RUTHDebout/katara-community-report`

## 3. **Configurer les paramètres de build**
Pour le frontend Next.js dans le dossier `/frontend` :

- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

## 4. **Variables d'environnement (si nécessaire)**
Ajoutez dans Netlify > Site settings > Build & deploy > Environment :
```
# Exemple
NODE_ENV=production
```

## 5. **Déploiement automatique**
Une fois configuré, Netlify déploiera automatiquement chaque push sur `main`.

## Fichier netlify.toml (optionnel)

Créez un fichier `netlify.toml` à la racine pour une configuration centralisée :

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_ENV = "production"
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

**Status actuel:** ✅ Votre dépôt est public et prêt pour Netlify
- Propriétaire: RUTHDebout
- Branche par défaut: main
- Frontend: Next.js dans `/frontend`
