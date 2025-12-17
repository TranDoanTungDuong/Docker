# Multi-stage build
# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["npm", "run", "serve"]