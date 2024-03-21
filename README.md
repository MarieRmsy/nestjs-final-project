# Évaluation finale
Pour ce test final vous allez être évalués sur votre maîtrise du framework NestJS. Ce projet, qu'il vous faudra dupliquer (fork), contient un certain nombre de tests automatisés. Chacun d'entre eux couvre une fonctionnalité spécifique : inscription, connexion, création d'une tâche, mise à jour d'une tâche etc.

🎯 **Votre objectif est simple :** faire passer tous ces tests en implémentant vous-mêmes ces fonctionnalités.

## Critères
Avant de rendre votre projet, vous devez vous assurer d'avoir respecté **3 critères obligatoires** :

### 🚀 Le projet fonctionne
* aucune erreur non gérée n'est jetée au runtime
* aucune erreur non gérée n'est jetée au compile time

| Contexte | Barème               |
| ------------- | -------------------- |
| Erreur au runtime       | -2 pts par erreur    |
| Erreur au rompile time  | 0 immédiat           |


### 💾 Une BDD est utilisée
* une base de données relationnelle ou noSQL est utilisée
* un outil d'ORM est configuré dans un module et est utilisé

| Contexte | Barème    |
| ------------- | -------------------- |
| Pas de BDD    | -5 pts               |
| ORM différent de TypeORM et Mongoose | +2 pts |

### 🧹 Le code est clean
Votre code se doit d'être propre, compréhensible et convenablement segmenté.

| Contexte | Barème    |
| ------------- | -------------------- |
| les classes, méthodes, variables etc. sont mal nommées | -2 pts |
| le code contient des commentaires jugés inutiles | -2 pts |
| les contrôleurs contiennent autre chose que de la logique HTTP | -4 pts |
| les services contiennent autre chose que de la logique métier | -4 pts |

## Setup
### 🏗️ Initialisation
1. Si ce n'est pas déjà fait, [inscrivez-vous](https://github.com/join) sur GitHub
2. Faites un fork de ce repository selon ce qui est indiqué dans [la documentation](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?platform=windows)
3. Clonez le repository que vous venez de vous attribuer grâce au fork
4. Installez ses dépendances en utilisant la commande `npm ci`

### 💾 Base de données
Deux SGBD ont été contenairisés via Docker :
* PostgreSQL, pour du relationnel
* MongoDB, pour du noSQL

Cela vous permet à vous (et à moi) de ne pas avoir à les installer sur nos machines. Pour pouvoir utiliser ces SGBD contenairisés :
1. Installez [Docker Desktop](https://www.docker.com/products/docker-desktop/) sur votre machine
2. Lancez-le
3. Lorsque vous voudrez lancer votre serveur, utilisez le script npm de votre choix : `npm run start:mongodb` ou `npm run start:postgres` (ces scripts démarrent une base de données, puis lancent le serveur en watch mode)

Pour pouvoir communiquer avec votre base de données depuis votre projet NestJS, vous devrez configurer l'outil d'ORM de votre choix parmi :
* [TypeORM](https://docs.nestjs.com/techniques/database)
* [Mongoose](https://docs.nestjs.com/techniques/mongodb)
* [Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)
* [MikroORM](https://docs.nestjs.com/recipes/mikroorm)
* [Prisma](https://docs.nestjs.com/recipes/prisma)

### 🧪 Tests
Les tests utilisés pour vous noter sont localisés dans le dossier `test`. Considérez-les comme les spécifications du projet, vous n'aurez d'autre choix que de les respecter à la lettre. Chaque fichier de test concerne un module en particulier :
- le fichier `auth.e2e-spec.ts` concerne le `AuthModule`
- le fichier `task.e2e-spec.ts` concerne le `TaskModule`
- le fichier `user.e2e-spec.ts` concerne le `UserModule`
