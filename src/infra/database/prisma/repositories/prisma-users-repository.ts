import { User } from '@/application/entities/User'
import { UsersRepository } from '@/application/repositories/UsersRepository'
import { PrismaService } from '@/lib/prisma'
import { Service } from 'typedi'

@Service()
export class PrismaUsersRepository implements UsersRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async create(user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async findById(userId: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  public async findByEmail(userEmail: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  public async save(user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
