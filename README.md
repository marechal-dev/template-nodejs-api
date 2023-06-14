# Node.js RESTFul API Template

Hi! My name is Pietro and this is a nice template I built for the sake of making Node.js API Development more efficient and typesafe.
**This template uses TypeScript and PostgreSQL by default! But you can change to accomodate your needs 😄**

## 📦 What is included?

### ⚙ Libs

- `reflect-metadata`
- `dotenv`
- `fastify`, with pre-installed ecosystem libs:
  - `@fastify/cookie`
  - `@fastify/cors`
  - `@fastify/helmet`
  - `@fastify/jwt`
  - `@fastify/swagger`
- `typedi`
- `zod`
- `@prisma/client` (includes `prisma`)
- `bcryptjs`
- `tsup`
- `tsx`
- `vitest` (includes `@vitest/coverage-c8` and `@vitest/ui`)
- `eslint`
- `vite-tsconfig-paths`

All `@types` packages included!

### 🛠 Configs

- EditorConfig
- ESLint
- Docker & Docker Compose
- GitHub Actions for _CI_
- Dependabot

### 📝 ESLint Rules

See `.eslintrc.json` to customize the rules for your own flavor 😉

## 🚀 How to get up and running

### Dev. Environment

1. Setup your Environment Variables following the `.env.example` example file
2. Run the `docker compose up` command pointing to the correct `docker-compose.yml` file (`docker-compose.dev.yml`)

### Prod. Environment

1. Setup your Environment Variables following the `.env.example` example file
2. Run the `docker compose up` command pointing to the correct `docker-compose.yml` file (`docker-compose.prod.yml`)
