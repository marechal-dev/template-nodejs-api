import { injectable as Service } from 'tsyringe'

import { prisma } from '@/lib/prisma'
import { User } from '@/application/entities/User'
import type { UsersRepository } from '@/application/repositories/users-repository'
import { PrismaUserMapper } from '../mappers/prisma-user-mapper'

@Service()
export class PrismaUsersRepository implements UsersRepository {
  public async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user)

    await prisma.user.create({
      data: raw,
    })
  }

  public async findById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return null
    }

    return PrismaUserMapper.toDomain(user)
  }

  public async findByEmail(userEmail: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    })

    if (!user) {
      return null
    }

    return PrismaUserMapper.toDomain(user)
  }

  public async save(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user)

    await prisma.user.update({
      where: {
        id: raw.id,
      },
      data: raw,
    })
  }
}
