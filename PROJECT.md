# PROJECT

## Epic Tasks #1 - Users Authentication
- [x] Fork
- [ ] Setup client : vite, react-redux, rtk, sass
- [ ] React App : home, connection, profile
- [ ] Responsive
- [ ] Features (Github Issues)
    - User can see the home page
    - User can login to the system
    - User can logout to the system
    - User can only see their own profile
    - User can update their profile

## Tasks #2 - Transactions
- voir maquette page des transactions 
- document décrivant les API proposées pour les transactions :  YAML / Swagger 

**Features**
- visualiser toutes leurs transactions pour le mois en cours ;
- visualiser les détails d'une transaction dans une autre vue ;
- ajouter, de modifier ou de supprimer des informations sur une transaction.

**Endpoints**
- La méthode HTTP (ex. : GET, POST, etc.)
- La route (ex. : /store/inventory)
- La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
- Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

## Specifications
- English documentation
- Stack : React, Redux
- Authentication system
- API documentation for transactions

## Resources
https://leewarrick.com/blog/the-problem-with-context/
https://kentcdodds.com/blog/application-state-management-with-react
https://dev.to/hey_yogini/usecontext-for-better-state-management-51hi
https://editor.swagger.io/

## Skills
- S'authentifier à une API
- Modéliser une API
- Intéragir avec une API
- Implémenter un gestionnaire d'état dans une application React

## Installation
```bash
$ pnpm create vite client --template react
$ cd client && pnpm install
$ pnpm install react-redux @reduxjs/toolkit
 ```