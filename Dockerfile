FROM docker.io/library/node:22-alpine AS build

WORKDIR /usr/local/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM docker.io/library/nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/dist/rent-a-herby-frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
