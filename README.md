# CR-SYMFONY - Application de Comptes-Rendus de Mammographie

## Description du Projet
Application web développée avec Symfony pour la création et la gestion de comptes-rendus de mammographie. L'application permet de standardiser et simplifier la rédaction des comptes-rendus en utilisant des formulaires dynamiques et des menus déroulants.

## Technologies Utilisées
- Symfony 6.4 (Framework PHP)
- Twig (Moteur de template)
- Webpack Encore (Gestion des assets)
- Doctrine ORM (Gestion de la base de données)
- SQLite (Base de données de développement)
- Bootstrap (Framework CSS)

## Journal de Développement

### Phase 1 - Configuration Initiale (En cours)
- [x] Création du projet Symfony 6.4
- [x] Configuration de l'environnement de développement
- [x] Configuration de SQLite
- [ ] Configuration de Webpack Encore
- [ ] Configuration de base de Twig
- [ ] Installation des dépendances supplémentaires

### Phase 2 - Structure de Base (Planifiée)
#### Entités prévues :
1. User (Utilisateur)
   - Informations d'authentification
   - Profil
   - Rôles et permissions
   - Abonnements/Licences

2. Form (Formulaire)
   - Type de formulaire (Mammographie, etc.)
   - Template
   - Configuration
   - Version

3. Report (Compte-rendu)
   - Lien vers le formulaire
   - Données du compte-rendu
   - Métadonnées (date, auteur, etc.)
   - État (brouillon, final, etc.)

4. MedicalHistory (Antécédents)
   - Antécédents personnels
   - Antécédents familiaux
   - Scores de risque

5. Examination (Examen)
   - Type d'examen
   - Résultats
   - Images/Documents associés

6. Template (Modèle)
   - Structure du document
   - Styles
   - Variables

7. Subscription (Abonnement)
   - Type d'abonnement
   - Durée
   - Fonctionnalités incluses
   - État

### Phase 3 - Développement des Fonctionnalités (À venir)
- [ ] Création des formulaires
- [ ] Développement des services
- [ ] Implémentation de la logique métier

### Phase 4 - Interface Utilisateur (À venir)
- [ ] Développement des templates Twig
- [ ] Intégration des assets
- [ ] Mise en place de l'export .docx

### Phase 5 - Tests et Documentation (À venir)
- [ ] Tests unitaires et fonctionnels
- [ ] Documentation technique
- [ ] Finalisation du README

## Installation et Configuration

### Prérequis
- PHP 8.2 ou supérieur
- Composer
- Node.js et npm
- SQLite3

### Installation
1. Cloner le repository
2. Installer les dépendances PHP :
   ```bash
   composer install
   ```
3. Installer les dépendances JavaScript :
   ```bash
   npm install
   ```
4. Configurer la base de données SQLite :
   ```bash
   php bin/console doctrine:database:create
   php bin/console doctrine:schema:create
   ```
5. Compiler les assets :
   ```bash
   npm run dev
   ```
6. Lancer le serveur de développement :
   ```bash
   symfony server:start
   ```

## Structure du Projet
```
src/
├── Controller/    # Contrôleurs de l'application
├── Entity/        # Entités Doctrine
├── Form/          # Formulaires Symfony
├── Service/       # Services métier
├── Repository/    # Repositories Doctrine
├── Security/      # Classes liées à la sécurité
└── DataFixtures/  # Données de test

templates/         # Templates Twig
assets/           # Fichiers source JS/CSS
public/           # Assets publics compilés
config/           # Fichiers de configuration
```

## Documentation Technique
La documentation technique détaillée sera ajoutée au fur et à mesure du développement.

## Contribution
Ce projet est en cours de développement. Les contributions ne sont pas encore ouvertes.

## Licence
À définir 