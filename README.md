# osu! Tracker

Application React Native pour rechercher des joueurs et des beatmaps osu! en temps réel avec lecteur audio intégré.

## ✨ Fonctionnalités

- 🔍 **Recherche de joueurs** : Affiche rang global, PP, précision, médailles et statistiques détaillées
- 🎵 **Recherche de beatmaps** : Avec prévisualisation audio (10 secondes)
- 📊 **Statistiques complètes** : Visualisation claire et moderne
- 🎧 **Lecteur audio** : Play/pause avec durée affichée en temps réel
- 📜 **Historique de recherche** : Sauvegarde locale (AsyncStorage) avec accès rapide
- 🌙 **Dark theme** : Violet/Rose moderne et agréable

## 🏗️ Architecture

**MVC + POO Structure :**
```
osu-tracker/
├── models/                    # Données (Player.ts, Beatmap.ts)
├── services/
│   ├── OsuService.ts         # API v1 (joueurs) + v2 (beatmaps)
│   └── SearchHistoryService.ts # Historique (AsyncStorage)
├── viewmodels/
│   └── SearchViewModel.ts    # Gestion d'état réactive
├── components/
│   ├── PlayerCard.tsx
│   ├── BeatmapCard.tsx
│   ├── SearchBar.tsx
│   ├── SearchHistory.tsx
│   ├── AudioPlayer.tsx
│   ├── TabButtons.tsx
│   └── ...
├── screens/
│   └── Home.tsx              # Écran principal
├── styles/
│   └── styles.js             # StyleSheet centralisé
└── assets/
```

## 🚀 Installation & Lancement

### 1. Prérequis
- **Node.js** (LTS) : https://nodejs.org
- **Expo Go** sur téléphone (App Store / Play Store)

### 2. Installation

```powershell
# Naviguer au projet
cd c:\Users\nawfe\Documents\osu-tracker

# Installer les dépendances
npm install
```

### 3. Configuration des clés API

Créer un fichier `.env` à la racine du projet :

```
OSU_API_KEY=ta_clé_api_v1
OSU_CLIENT_ID=ton_client_id
OSU_CLIENT_SECRET=ton_client_secret
```

**Obtenir les clés :**
1. **v1 API Key** : https://osu.ppy.sh/api/token
2. **v2 OAuth (Client ID/Secret)** :
   - Aller sur https://osu.ppy.sh/home/account/edit
   - Section "OAuth Applications"
   - Créer une nouvelle application
   - Copier les identifiants

### 4. Lancer l'app

```powershell
npx expo start
```

Cela va afficher un QR code dans le terminal.

**Sur le téléphone :**
1. Ouvrir **Expo Go**
2. Scanner le QR code
3. L'app se lance automatiquement ✨

## 📱 Utilisation

**Rechercher un joueur :**
1. Sélectionner l'onglet "Joueur" (👤)
2. Entrer le pseudo
3. Cliquer 🔍 ou appuyer Entrée

**Rechercher une beatmap :**
1. Sélectionner l'onglet "Beatmap" (🎵)
2. Entrer le titre/artiste/créateur
3. Cliquer 🔍 ou appuyer Entrée

**Accès rapide :**
- Les recherches précédentes s'affichent dans "Historique"
- Cliquer pour relancer la recherche
- ✕ pour supprimer

**Écouter une musique :**
- Cliquer ▶ sur une beatmap
- La musique joue pendant 10 secondes (aperçu officiel)
- ⏸ pour mettre en pause

## 🎨 Design

| Couleur | Valeur | Utilisation |
|---------|--------|-------------|
| Primaire (Violet) | `#7c3aed` | Onglets actifs, borders |
| Accent (Rose) | `#ec4899` | Noms, valeurs importantes |
| Secondaire (Bleu) | `#3b82f6` | Stats secondaires |
| Fond | `#0f172a` | Background |
| Surface | `#1e293b` | Cartes |

## 🛠️ Dépendances Principales

```json
{
  "react-native": "Framework mobile",
  "expo": "Plateforme dev",
  "expo-av": "Lecteur audio",
  "@react-native-async-storage/async-storage": "Stockage local"
}
```

## 📚 Concepts Clés

### Model-View-Controller
- **Models** : `Player.ts`, `Beatmap.ts` - Logique métier
- **Views** : Composants React - Interface utilisateur
- **Services** : `OsuService.ts` - Communication API

### Observer Pattern
`SearchViewModel` utilise un système d'abonnement pour notifier les changements d'état.

### AsyncStorage
L'historique persiste même après fermer l'app, stocké localement sur le téléphone.

## 🔧 Commandes Utiles

```powershell
# Lancer l'app
npx expo start

# Réinitialiser le cache
npx expo start --clear

# Installer une dépendance
npm install package-name

# Vérifier les erreurs
npm run lint  # (si configuré)
```

## 🐛 Dépannage

**L'app ne démarre pas ?**
```powershell
npx expo start --clear
```

**Les clés API ne fonctionnent pas ?**
- Vérifier le fichier `.env`
- Relancer : `npx expo start --clear`
- Vérifier que les clés sont correctes

**AsyncStorage ne fonctionne pas ?**
- Mettre à jour Expo Go sur le téléphone

**Pas de son ?**
- Vérifier la connexion internet
- Augmenter le volume du téléphone
- Certaines beatmaps peuvent ne pas avoir d'aperçu

## 📖 API Utilisée

**osu! Official API :**
- v1 : Joueurs - https://github.com/ppy/osu-api/wiki
- v2 : Beatmaps (OAuth2) - https://osu.ppy.sh/docs/index.html

## 🎓 Apprentissage

Cet projet démontre :
✅ Architecture MVC  
✅ Composants réutilisables  
✅ Gestion d'état (ViewModel pattern)  
✅ Communication API (fetch)  
✅ Stockage persistant (AsyncStorage)  
✅ Design moderne et UX intuitive

---

**Créé avec ❤️ pour osu! et React Native**
