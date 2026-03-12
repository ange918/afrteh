# DAHOMEY-TECH — Marketplace de Mode Africaine Augmentée par IA

## Vue d'ensemble
Plateforme de mode béninoise et africaine augmentée par l'IA, avec une esthétique luxe noir & or (Cormorant Garamond + Montserrat, couleur principale #C9A84C).

## Tech Stack
- Next.js 16.1.6 avec App Router
- React 19.2.3
- TypeScript 5 (strict)
- Tailwind CSS 4
- Lucide React (icônes)

## Structure du projet
```
src/
├── app/
│   ├── api/chat/route.ts       — API Claude (Styliste IA)
│   ├── assistant/page.tsx      — Page Styliste IA (ChatUI)
│   ├── cart/page.tsx           — Page Panier
│   ├── creators/
│   │   ├── page.tsx            — Liste des créateurs
│   │   └── [id]/page.tsx       — Profil créateur
│   ├── dashboard/              — Studio Créateur
│   ├── marketplace/page.tsx    — Marketplace avec filtres
│   ├── product/[id]/page.tsx   — Détail produit
│   ├── globals.css             — Variables CSS (--gold, --background, etc.)
│   ├── layout.tsx              — Layout racine + CartProvider
│   └── page.tsx                — Page d'accueil
├── components/
│   ├── ChatUI.tsx              — Interface chat Claude AI
│   ├── Navbar.tsx              — Nav avec badge panier + lien Créateurs
│   └── ProductCard.tsx         — Carte produit avec "Ajouter au panier" hover
├── context/
│   └── CartContext.tsx         — Context API panier global
└── lib/
    └── mock-data.ts            — Produits + Créateurs (données enrichies)
```

## Variables CSS globales (globals.css)
- `--gold`: #C9A84C (couleur principale)
- `--background`: #000000
- `--foreground`: #ffffff
- `.btn-gold` — bouton doré arrondi
- `.luxury-card` — carte avec fond sombre et bordure or au hover
- `.font-display` — Cormorant Garamond (titres)
- `.font-sans` — Montserrat (corps)

## Configuration API
- Créer `.env.local` avec : `ANTHROPIC_API_KEY=sk-ant-...`
- Le Styliste IA utilise le modèle `claude-sonnet-4-20250514`

## Développement
Le serveur tourne sur le port 5000 : `npm run dev`

## Déploiement
- Build : `npm run build`
- Start : `npm run start`
