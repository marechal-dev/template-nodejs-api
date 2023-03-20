import { container } from 'tsyringe'

import type { UsersRepository } from '@/application/repositories/users-repository'
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository'

export class DependenciesIdentifiers {
  public static usersRepository = 'usersRepository'
}

container.registerSingleton<UsersRepository>(
  DependenciesIdentifiers.usersRepository,
  PrismaUsersRepository,
)
