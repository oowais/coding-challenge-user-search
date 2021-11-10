# Stage 1
FROM node:14-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/coding-challenge-user-search /usr/share/nginx/html
