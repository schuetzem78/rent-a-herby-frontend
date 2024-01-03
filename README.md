# rent-a-herby

hier könnte unsere website entstehen

## Platform, Install, Setup, ...

- download node.js from nodejs.org (LTS-Version: 20.x)
- install node.js

## Angular vorbereiten
siehe dazu: https://angular.io/guide/setup-local

npm install -g @angular/cli

## Angular Initialprojekt erzeugen

In das richtige Verzeichnis springen und danach folgendes ausführen
ng new rent-a-herby-frontend --no-standalone
-> SASS auswählen

## Angular Material einhängen
ng add @angular/material


## Tailwind CSS einhängen
siehe: https://tailwindcss.com/docs/installation

# RentAHerbyFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy the app
### Docker-Image erstellen
docker build -t rent-a-herby-frontend .

### Auflisten aller Docker-Images
docker image ls

### Docker-Container erstellen (auf Basis des Docker-Images)
docker container create rent-a-herby-frontend

### Docker-Container auflisten (auch die nicht gestarteten)
docker ps -a

### Docker-Container starten
docker container start f380d0762fba







