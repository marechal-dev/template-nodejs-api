import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'] as const)
    .default('development'),
  PORT: z.coerce.number().default(3333),
})

const parsingResult = envSchema.safeParse(process.env)

if (!parsingResult.success) {
  console.error('❌ Invalid Env. Variables', parsingResult.error.format())

  process.exit(1);
}

export const env = parsingResult.data
