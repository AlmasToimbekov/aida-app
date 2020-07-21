FROM node:8.9-alpine as prod
ENV NODE_ENV=production
WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm install --only=production
WORKDIR /app/client
COPY ./client/package*.json ./
RUN npm install --only=production
WORKDIR /app
COPY . .
RUN npm run build --prefix './client'
WORKDIR /app/server
CMD ["npm", "start"]

