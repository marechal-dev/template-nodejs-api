import { User } from '@/application/entities/User'
import type { UsersRepository } from '@/application/repositories/users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  private readonly items: User[] = []

  public async create(user: User): Promise<void> {
    this.items.push(user)
  }

  public async findById(userId: string): Promise<User | null> {
    const user = this.items.find((item) => item.ID === userId)

    if (!user) {
      return null
    }

    return user
  }

  public async findByEmail(userEmail: string): Promise<User | null> {
    const user = this.items.find((item) => item.Email === userEmail)

    if (!user) {
      return null
    }

    return user
  }

  public async save(user: User): Promise<void> {
    const userIndex = this.items.findIndex((item) => item.ID === user.ID)

    if (userIndex >= 0) {
      this.items[userIndex] = user
    }
  }
}
