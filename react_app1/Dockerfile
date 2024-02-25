# # Stage 1
# # FROM node:20-alpine as build
# FROM node:20-alpine as react-build
# WORKDIR /react_app1
# COPY . ./
# RUN rm -r node_modules
# RUN npm install
# RUN npm run build

# # Stage 2 - the production environment
# FROM nginx:alpine
# # COPY nginx.conf /etc/nginx/nginx.conf
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=react-build /react_app1/dist /usr/share/nginx/html
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]

# Build Environment
FROM node:20-alpine as build
WORKDIR /react_app1
COPY package*.json ./
# RUN npm ci --silent
RUN npm install
# Have a .dockerignore file ignoring node_modules and build
COPY . ./
RUN npm run build
# Production
FROM nginx:stable-alpine
COPY --from=build /react_app1/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]