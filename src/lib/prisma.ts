import { PrismaClient } from '@prisma/client'
import { Service } from 'typedi'

import { env } from '@/env'

@Service()
export class PrismaService extends PrismaClient {
  public constructor() {
    super({
      log: env.NODE_ENV === 'development' ? ['query'] : [],
    })
  }
}
