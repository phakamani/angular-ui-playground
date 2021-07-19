# AngularUiPlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Produce code coverage report
Run `ng test --watch=false --code-coverage`
Open the `coverage` folder
This coverage folder contains the test report
If not already installed, install the http-server globaly by running `npm install -g http-server`
Run `cd coverage`
Run `http-server -c-1` , if it is not working then run it from cmd in admin mode
From your browser, navigate to http://localhost:8080/angular-ui-playground/

## To setup tests in continuous integration mode
Build the application in production mode by running `npm run build:prod`
Run `npm run start:prod`

## Run cypress for your prod build
Run `npm run cypress:run`

## Run build, run and e2e test prod version locally
Notice, this is handled by npm-run-all

## Stack
Material design
Mock server node
Actual server spring-boot
front end angular
unit testing jasmine
e2e Cypress 
Github

udemy: tests course
