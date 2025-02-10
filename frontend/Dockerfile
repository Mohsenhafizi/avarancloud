FROM node:latest as build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM node:latest as prod
WORKDIR /app
COPY --from=build /app/.output /app/.output
CMD ["node", ".output/server/index.mjs"] 