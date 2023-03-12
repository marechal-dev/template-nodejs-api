import { User as RawUser } from '@prisma/client'

import { User } from '@/application/entities/User'

export class PrismaUserMapper {
  public static toPrisma(user: User) {
    return {
      id: user.ID,
      name: user.Name,
      email: user.Email,
      passwordHash: user.PasswordHash,
    }
  }

  public static toDomain(raw: RawUser) {
    return new User(
      {
        name: raw.name,
        email: raw.email,
        passwordHash: raw.passwordHash,
        createdAt: raw.createdAt,
      },
      raw.id,
    )
  }
}
