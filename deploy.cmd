@REM Docker-Container stoppen
docker container kill rent-a-herby-frontend-container

@REM Docker-Container löschen
docker container rm rent-a-herby-frontend-container

@REM Docker-Image löschen
docker image rm rent-a-herby-frontend-image

@REM Docker-Image neu erstellen
docker build --tag rent-a-herby-frontend-image .

@REM Docker-Container erstellen (mit einem Namen, damit er beim nächsten Skript-Lauf auch leicht löschbar ist) und starten
docker run -d -it -p 4200:80 --name rent-a-herby-frontend-container rent-a-herby-frontend-image
