# Dockerfile for the webapp
FROM node:22.14.0

WORKDIR /buildReact
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD serve -s dist