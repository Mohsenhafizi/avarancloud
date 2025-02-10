# # Stage 1: Build the Nuxt.js application
# FROM node:latest AS build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the built files with Nginx
# FROM nginx:stable-alpine
# COPY --from=build-stage /app/.nuxt/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# Use a large Node.js base image to build the application and name it "build"
FROM node:latest as build

# Exact same steps as before
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Create a new Docker image and name it "prod"
FROM node:latest as prod

WORKDIR /app

# Copy the built application from the "build" image into the "prod" image
# This will only copy whatever is in the .output folder and ignore useless files like node_modules!
COPY --from=build /app/.output /app/.output

# Start is the same as before
CMD ["node", ".output/server/index.mjs"] 