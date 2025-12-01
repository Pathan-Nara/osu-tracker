# 🎵 OSU Tracker - Application React Native

Application de suivi OSU construite selon les principes **POO** et **MVC** (Model-View-Controller), adaptée au wireframe fourni.

## 📐 Architecture MVC/POO

### Models (Couche Métier)
- `Player.ts`: Classe Player avec statistiques (rang, PP, précision, level)
- `Beatmap.ts`: Classe Beatmap avec stats (BPM, difficulty, rating, drain HP, etc.)

### Services (Couche Métier)
- `OsuService.ts`: Service centralisé pour appels API officiels OSU

### ViewModels (Couche Présentation)
- `SearchViewModel.ts`: Gestion d'état réactif pour la recherche avec pattern Observer

### Components (Couche Vue)
- `TabButtons`: Sélection Joueur/Beatmap
- `SearchBar`: Input + bouton GO
- `PlayerCard`: Affiche profil joueur
- `BeatmapCard`: Affiche détails beatmap
- `EmptyState`: État initial

### Screens (Écrans)
- `Home.tsx`: Écran principal avec onglets + recherche
- `Beatmap.tsx`: Template détails

## 🎨 Design

Couleurs du wireframe:
- **Rose**: `#ff66cc` (primaire)
- **Bleu**: `#3366ff` (secondaire)  
- **Fond Dark**: `#1a0d2e`
- **Surface**: `#ffffff` (cartes)

## 📁 Structure

```
osu-tracker/
├── models/              # Modèles (Player, Beatmap)
├── services/            # Services (OsuService)
├── viewmodels/          # ViewModels (SearchViewModel)
├── components/          # Composants réutilisables
├── screens/             # Écrans de navigation
├── styles/              # Styles centralisés
├── App.tsx              # Configuration navigation
└── index.tsx            # Entrée app
```

## 🚀 Configuration

1. **Cloner le projet**
   ```bash
   npm install
   ```

2. **Ajouter clé API OSU**
   - Créer `.env` depuis `.env.example`
   - Obtenir clé sur: https://osu.ppy.sh/p/api
   - Ajouter: `EXPO_PUBLIC_OSU_API_KEY=votre_cle`

3. **Lancer l'app**
   ```bash
   npm start          # Expo
   npm run android    # Android
   npm run ios        # iOS
   npm run web        # Web
   ```

## 💡 Flux Utilisateur

1. **Accueil**: Choisir Joueur ou Beatmap
2. **Recherche**: Entrer nom + cliquer GO
3. **Résultats**: Voir profil joueur OU liste beatmaps
4. **Détails**: Cliquer une carte (extensible)

## 📚 Principes Appliqués

✅ **Séparation des responsabilités** (MVC)  
✅ **POO simple** avec classes Player et Beatmap  
✅ **ViewModel pattern** pour l'état réactif  
✅ **Service layer** isolée  
✅ **Composants réutilisables** et testables  
✅ **Code étudiant-friendly** (simple, bien commenté)  

## 🔧 Extensibilité

- Ajouter nouveaux services dans `services/`
- Créer composants dans `components/`
- Ajouter écrans dans `screens/`
- ViewModel pattern permet tests unitaires faciles

---

**Prêt pour développer sur cette base !** 🚀
