import { UsersRepository } from '@/application/repositories/users-repository'
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository'
import { Container } from 'typedi'

export function initializeDependenciesContainer() {
  Container.set<UsersRepository>('usersRepository', PrismaUsersRepository)
}
