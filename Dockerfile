FROM node:20.10-bookworm-slim as build

ENV NODE_ENV=production 

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

run npm i -g pnpm
RUN pnpm install
COPY . ./
RUN pnpm run build

FROM node:20.10-bookworm-slim

WORKDIR /app
COPY --from=build /app .
EXPOSE 4173

CMD ["node","build"]