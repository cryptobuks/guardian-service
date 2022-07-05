FROM node:16 AS builder

ARG APP_PORT

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig.build.json ./

# Install app dependencies
RUN yarn install

COPY . .

RUN yarn build

FROM node:16-slim

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/tsconfig.build.json ./

EXPOSE $PORT
CMD [ "yarn", "start:prod" ]