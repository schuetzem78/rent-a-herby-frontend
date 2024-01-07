@REM Docker-Container stoppen
docker container kill rent-a-herby-frontend-container

@REM Docker-Container löschen
docker container rm rent-a-herby-frontend-container

@REM Docker-Image löschen
docker image rm rent-a-herby-frontend-image

@REM Docker-Image neu erstellen
docker build --tag rent-a-herby-frontend-image .

@REM Docker-Container erstellen (mit einem Namen, damit er beim nächsten Skript-Lauf auch leicht löschbar ist) und starten
docker run -d -it -p 4200:80 --name rent-a-herby-frontend-container -v /volume2/Daten/rent-a-herby-static-website:/usr/share/nginx/html rent-a-herby-frontend-image

@REM COPY --from=build /usr/local/app/dist/rent-a-herby-frontend/browser /usr/share/nginx/html