import { User } from '../entities/User'

export interface UsersRepository {
  create(user: User): Promise<void>
  findById(userId: string): Promise<User | null>
  findByEmail(userEmail: string): Promise<User | null>
  save(user: User): Promise<void>
}
