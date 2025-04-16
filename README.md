# Projet CR-SYMFONY - Compte Rendu Mammographie

## Description du Projet
Application web développée avec Symfony pour la gestion des comptes rendus de mammographie. Cette application permet aux professionnels de santé de saisir et gérer les données d'examens mammographiques de manière structurée et sécurisée.

## Structure du Projet

```
CR-SYMFONY/
├── assets/
│   ├── css/
│   │   └── app.css
│   └── js/
│       └── form_mamo/
│           ├── form_mamo_densite_droite.js
│           ├── form_mamo_densite_gauche.js
│           ├── form_mamo_densite_echo_droite.js
│           └── form_mamo_densite_echo_gauche.js
├── config/
│   ├── packages/
│   │   ├── security.yaml
│   │   └── doctrine.yaml
│   ├── services.yaml
│   └── routes/
│       └── annotations.yaml
├── src/
│   ├── Controller/
│   │   ├── SecurityController.php
│   │   ├── HomeController.php
│   │   └── FormMamo/
│   │       └── FormMamoController.php
│   ├── Entity/
│   │   ├── User.php
│   │   └── FormMamo/
│   │       └── FormMamoDensite.php
│   ├── Form/
│   │   └── FormMamo/
│   │       └── Densite/
│   │           ├── FormMamoDensiteDroiteType.php
│   │           ├── FormMamoDensiteGaucheType.php
│   │           ├── FormMamoDensiteEchoDroiteType.php
│   │           └── FormMamoDensiteEchoGaucheType.php
│   ├── Repository/
│   │   ├── UserRepository.php
│   │   └── FormMamo/
│   │       └── FormMamoDensiteRepository.php
│   └── Service/
│       └── FormMamo/
│           ├── FormDataService.php        # Service de gestion des données du formulaire
│           ├── DocumentGeneratorService.php # Service de génération de documents (PDF/Word)
│           └── EmailService.php           # Service d'envoi d'emails
├── templates/
│   ├── base.html.twig
│   ├── security/
│   │   └── login.html.twig
│   ├── pdf/
│   │   └── pdf_template.html.twig        # Template pour la génération de PDF
│   └── home/
│       └── formulaire/
│           └── Mamo/
│               └── densite/
│                   ├── _densite_droite.html.twig
│                   ├── _densite_gauche.html.twig
│                   ├── _densite_echo_droite.html.twig
│                   └── _densite_echo_gauche.html.twig
└── public/
    └── css/
         └── app.css

```

## Compétences Techniques Validées

### 1. Configuration et Base du Projet ✅
- Création et initialisation du projet Symfony
- Configuration de l'environnement de développement
- Gestion des dépendances via Composer

### 2. Système d'Authentification ✅
- Mise en place du système de login
- Gestion des utilisateurs et des rôles
- Sécurisation des routes
- Protection contre les attaques CSRF

### 3. Gestion des Formulaires ✅
- Création de formulaires complexes avec FormType
- Validation des données
- Gestion des erreurs
- Formulaires imbriqués et collections

### 4. Base de Données et Doctrine ✅
- Configuration de la base de données
- Création des entités
- Mise en place des repositories
- Gestion des migrations

### 5. Templates et Vues ✅
- Utilisation avancée de Twig
- Création de layouts réutilisables
- Gestion des assets
- Templates modulaires et extensibles

### 6. Routage et Navigation ✅
- Configuration des routes
- Gestion des paramètres
- Sécurisation des accès
- Navigation fluide entre les pages

## Points en Cours de Développement

### 1. Webpack Encore ✅
- Installation et configuration de Webpack Encore réalisée
- Assets (JS/CSS) correctement organisés dans le dossier assets/
- Compilation avec npm run dev/build
- Optimisation des ressources front-end en place

### 2. Services Symfony ❓
- Refactorisation du code en services
- Implémentation de l'injection de dépendances
- Tests unitaires des services

## Installation et Déploiement

### Prérequis
- PHP 8.1 ou supérieur
- Composer
- Symfony CLI
- MySQL/MariaDB

### Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
```

2. Installer les dépendances
```bash
composer install
```

3. Configurer la base de données dans .env
```
DATABASE_URL="mysql://user:password@127.0.0.1:3306/cr_symfony"
```

4. Créer la base de données et exécuter les migrations
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

5. Lancer le serveur de développement
```bash
symfony server:start
```

## Fonctionnalités Principales

### 1. Gestion des Comptes Rendus
- Saisie des données mammographiques

### 2. Interface Utilisateur
- Interface intuitive et responsive
- Formulaires dynamiques
- Validation en temps réel

### 3. Sécurité
- Authentification sécurisée
- Gestion des rôles et permissions
- Protection des données sensibles

## Prochaines Étapes

1. Refactorisation en services
2. Ajout de tests unitaires et fonctionnels
3. Documentation technique complète
4. Optimisation des performances
