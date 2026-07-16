# 📚 Apprendre le français — Parcours progressif (du CP au Bac)

Un programme complet et progressif pour apprendre le français, construit à la
manière de l'école française : vocabulaire, grammaire, conjugaison, textes à lire
et exercices corrigés, du primaire jusqu'au baccalauréat.

> 👉 **Les documents sont en HTML (lecture à l'écran) et en PDF (impression).**
> Ouvrez [`index.html`](./index.html) dans un navigateur pour naviguer, ou
> ouvrez directement les PDF du dossier [`pdf/`](./pdf/).

---

## 🗺️ Les documents

| Niveau | Page HTML | PDF | Classe | Contenu |
|--------|-----------|-----|--------|---------|
| **Accueil** | [`index.html`](./index.html) | [pdf](./pdf/index.pdf) | — | Sommaire et conseils |
| **1** | [niveau-1](./niveau-1-primaire-cp-ce1.html) | [pdf](./pdf/niveau-1-primaire-cp-ce1.pdf) | CP–CE1 | Sons, syllabes, premiers mots, phrases |
| **2** | [niveau-2](./niveau-2-primaire-ce2-cm2.html) | [pdf](./pdf/niveau-2-primaire-ce2-cm2.pdf) | CE2–CM2 | Nature des mots, présent, passé composé |
| **3** | [niveau-3](./niveau-3-college.html) | [pdf](./pdf/niveau-3-college.pdf) | 6ᵉ–3ᵉ | Conjugaison complète, types de textes, récit |
| **4** | [niveau-4](./niveau-4-lycee.html) | [pdf](./pdf/niveau-4-lycee.pdf) | 2ⁿᵈᵉ–1ʳᵉ | Figures de style, registres, argumentation |
| **5** | [niveau-5](./niveau-5-terminale-bac.html) | [pdf](./pdf/niveau-5-terminale-bac.pdf) | Terminale | Commentaire, dissertation, textes classiques |
| **Guide** | [guide-methode](./guide-methode.html) | [pdf](./pdf/guide-methode.pdf) | Tous | Méthode, planning, erreurs fréquentes |
| **Annexe** | [fiches-conjugaison](./fiches-conjugaison.html) | [pdf](./pdf/fiches-conjugaison.pdf) | Tous | Tableaux de conjugaison |

Chaque niveau suit la même logique : **objectifs → vocabulaire progressif →
règles détaillées → textes à lire → exercices avec corrigés**.

---

## 🖨️ Régénérer les PDF

Les PDF sont produits à partir des fichiers HTML avec Playwright :

```bash
node build-pdf.js
```

*(Playwright et Chromium doivent être disponibles. Les PDF sont écrits dans `pdf/`.)*

---

## 🎯 Conseils d'utilisation

- Suivez l'ordre des niveaux ; ne passez au suivant qu'une fois le précédent maîtrisé.
- Lisez à voix haute et tenez un carnet de vocabulaire.
- Faites les exercices : les corrigés sont repliables dans le HTML, et dépliés dans le PDF.
- Révisez 20 à 30 minutes par jour plutôt que de longues séances rares.

Bon apprentissage ! 🇫🇷
