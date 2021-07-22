# AngularUiPlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Produce code coverage report
Run `ng test --watch=false --code-coverage`

Open the ./coverage folder. This coverage folder contains the test report
If not already installed, install the http-server globaly by running `npm install -g http-server`
Run `cd coverage`
Run `http-server -c-1` , if it is not working then run it from cmd in admin mode
From your browser, navigate to http://localhost:8080/angular-ui-playground/

## To setup tests in continuous integration mode
Build the application in production mode by running `npm run build:prod`
Run `npm run start:prod`

## Run cypress for your prod build
Run `npm run cypress:run`

## Stack
Material design
Mock server node
Actual server spring-boot
front end angular
unit testing jasmine
e2e Cypress 
Github
invionapp <Design>
udemy: tests course
Firebase
## UI Prototype can be found at 
https://projects.invisionapp.com/freehand/document/Lg5yK2jYD

## Database
https://console.firebase.google.com/project/angular-playground-23023/database/angular-playground-23023-default-rtdb/data

## Folder structure
https://github.com/mathisGarberg/angular-folder-structure
-------------------------------
├── media  (Stores documentation)
  └── src
      ├── app
      │   ├── core 
              This module is for classes used by app.module. Resources which are always loaded such as route guards, HTTP interceptors, and application level services, such as the ThemeService and logging belong in this directory.
      │   ├── data
      │   ├── layout
      │   ├── module
      │   └── shared
      └── styles
--------------------------------
