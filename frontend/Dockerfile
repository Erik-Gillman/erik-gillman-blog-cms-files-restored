# syntax=docker/dockerfile:1
FROM node:20-alpine as angular
WORKDIR /ng-app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
ARG name
COPY --from=angular /ng-app/dist/untitled /usr/share/nginx/html

