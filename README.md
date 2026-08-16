# DigieWomen School – Portail Numérique Vitrine

Portail vitrine de **DigieWomen School**, structure gabonaise de formation aux métiers du numérique et de l'agro-pastoral.

## Stack technique

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** + Framer Motion
- **Static Site Generation (SSG)** pour les pages de contenu
- Intégrations prêtes : Notion (contenu dynamique), SheetDB (formulaires), email de notification

## Prérequis

- Node.js 18+
- npm ou yarn

## Installation

```bash
# Cloner / décompresser le projet
cd digie-portal

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local
# Puis renseigner les clés (SheetDB, email, Notion si besoin)
```

## Lancement en local

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Structure du projet

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Accueil
│   ├── parcours/           # Notre parcours
│   ├── formations/         # Formations
│   ├── specialisations/    # GED & e-Agri361
│   ├── formateurs/         # Experts formateurs
│   ├── actualites/         # Actualités & réalisations
│   ├── contact/            # Formulaire dynamique
│   └── api/contact/        # Route API formulaires
├── components/             # Composants réutilisables
├── data/content.ts         # Données statiques (stats, formations, etc.)
└── lib/utils.ts
```

## Configuration des services

### SheetDB (formulaires de contact)

1. Créez une feuille Google Sheets avec les colonnes souhaitées
2. Connectez-la via [SheetDB](https://sheetdb.io)
3. Renseignez `SHEETDB_URL` dans `.env.local`

### Email de notification

Intégrez un fournisseur (Resend, SendGrid, Nodemailer…).  
La route `/api/contact` contient un placeholder prêt à être branché.

### WhatsApp Business

Le bouton flottant utilise le numéro défini dans `src/data/content.ts` (`contactInfo.whatsapp`).  
Modifiez-le si besoin.

### Notion (optionnel)

Les données actuelles sont statiques dans `src/data/content.ts`.  
Pour un CMS Notion, branchez l’API officielle dans des routes serveur dédiées.

## Fonctionnalités

- ✅ Responsive mobile-first
- ✅ Mode clair / sombre (mémorisé)
- ✅ Menu burger mobile + navbar sticky desktop
- ✅ Formulaires dynamiques par profil (entreprise, administration, particulier, entrepreneur)
- ✅ Bouton WhatsApp flottant
- ✅ Animations Framer Motion
- ✅ Style bento pour les chiffres clés
- ✅ Carrousel témoignages autoplay

## Contenu

Le contenu textuel est strictement issu du document de présentation DigieWomen School (hors section « Nos attentes » confidentielle).

## Licence

Projet réalisé pour DigieWomen School. Tous droits réservés.
