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

## GitHub Pages

Bei jedem Push auf `main` wird die Angular-Anwendung gebaut und automatisch auf GitHub Pages veröffentlicht. Die Website ist unter `https://www.rent-a-herby.de/` erreichbar; `https://rent-a-herby.de/` wird dorthin weitergeleitet.

Einmalig in GitHub unter **Settings > Pages > Build and deployment** als **Source** `GitHub Actions` auswählen. Der veröffentlichte Stand und die URL sind anschließend im Workflow **Deploy to GitHub Pages** unter **Actions** zu sehen.

## Feature-Branch-Vorschau mit Podman

Bei Pushes auf Branches mit dem Muster `feature/*` oder `feature-*` baut der Workflow **Build preview container** ein Container-Image und veröffentlicht es in der GitHub Container Registry. Der Pages-Workflow wird dadurch nicht ausgelöst und die Live-Website bleibt unberührt.

Das Image erhält einen Branch-Tag sowie einen unveränderlichen Commit-Tag. Die genauen Namen stehen in der Zusammenfassung des jeweiligen Workflow-Laufs unter **Actions**.

Das Package liegt unter `ghcr.io/schuetzem78/rent-a-herby-frontend`. Prüfe nach dem ersten Workflow-Lauf unter **GitHub-Profil > Packages > rent-a-herby-frontend > Package settings**, dass die Sichtbarkeit **Private** ist. Falls Berechtigungen vom öffentlichen Repository geerbt werden, deaktiviere die Vererbung, damit nur berechtigte Nutzer das Image laden können.

Für ein privates Image benötigst du lokal einen Personal Access Token (classic) mit mindestens `read:packages`. Melde dich an und starte anschließend den Container:

```sh
podman login ghcr.io -u DEIN_GITHUB_BENUTZERNAME
podman pull ghcr.io/schuetzem78/rent-a-herby-frontend:feature-mein-feature
podman run --rm --name rent-a-herby-preview -p 8080:80 ghcr.io/schuetzem78/rent-a-herby-frontend:feature-mein-feature
```

Podman fragt beim Login nach dem Token. Die Vorschau ist danach unter `http://localhost:8080` erreichbar. Ersetze `feature-mein-feature` durch den Branch-Tag aus der Workflow-Zusammenfassung.

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

sudo docker ps

Öffentliche Adresse: 

http://rent-a-herby.785vrh4ungtam6ne.myfritz.net:80

Port (Standardport): 80
wird umgeleitet auf Docker-Container

### Image Banner Carousel
- https://primeng.org/carousel

# Raspery Pi
### wie verbinde ich mich auf den Raspy
`ssh michael@rent-a-herby`

### wo finde ich den Ablageort des Frontends
`/var/www/html`





# Installation von caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

# IPs, Portweiterleitung & Co
https://www.rent-a-herby.de:443 -> fritz.box -> 192.168.178.54
https://www.rent-a-herby.de:3000 -> fritz.box -> 192.168.178.54
http://www.rent-a-herby.de:80 -> fritz.box -> 192.168.178.54
http://www.rent-a-herby.de:2346 -> fritz.box -> 192.168.178.54
http://www.rent-a-herby.de:2342 -> fritz.box -> 192.168.178.54
