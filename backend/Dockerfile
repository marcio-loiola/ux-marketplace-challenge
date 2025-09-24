# 1. Development Stage
FROM node:18-alpine AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev"]

# 2. Builder Stage
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
# Use npm ci for reproducible builds
RUN npm ci --omit=dev
COPY . .
RUN npm run build

# 3. Production Stage
FROM node:18-alpine AS production
WORKDIR /usr/src/app
# Copy built app and dependencies from builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
# Set the command to run the application
CMD ["node", "dist/main"]
