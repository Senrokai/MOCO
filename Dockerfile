FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci
RUN npm i -g @angular/cli

COPY . .
RUN ng build --prod

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/dist/MOCOApp .
