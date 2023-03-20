# Node.js RESTFul API Template

Hi! My name is Pietro and this is a nice template I built for the sake of making Node.js API Development more efficient and typesafe.

**This template uses TypeScript and PostgreSQL by default! But you can change to accomodate your needs :D**

## ⚙ Libs used:
- `reflect-metadata`
- `dotenv`
- `fastify`
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

### 📝 ESLint Ruleset used:
- `@rocketseat/eslint-config`

**Obs.: Some custom rules are enabled!**

## 🚀 How to get up and running

1. Setup your Environment Variables following the `.env.example` example file

2. Run the `docker compose up` command:
```sh
$ docker compose up
```

3. Run the `prisma migrate dev` command:
```sh
$ npx prisma migrate dev
```

4. Run the `build` command:
```sh
$ npm run build
```

5. Run the `start:prod` command:
```sh
$ npm run start:prod
```
