FROM node:14-alpine

COPY package.json package-lock.json ./

RUN npm install && mkdir /app-ui && mv ./node_modules ./app-ui

WORKDIR /app-ui

COPY . .

EXPOSE 4200

CMD ["sh", "-c", "npm run ng serve --host=0.0.0.0 --port=4200"]

