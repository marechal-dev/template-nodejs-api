import { injectable as Service, inject as Inject } from 'tsyringe'
import { hash } from 'bcryptjs'

import { DependenciesIdentifiers } from '@/shared/container'

import { User } from '../entities/User'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import type { UsersRepository } from '../repositories/users-repository'

interface RegisterUserRequest {
  name: string
  email: string
  password: string
}

interface RegisterUserResponse {
  user: User
}

@Service()
export class RegisterUserUseCase {
  public constructor(
    @Inject(DependenciesIdentifiers.usersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: RegisterUserRequest): Promise<RegisterUserResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const passwordHash = await hash(password, 6)

    const user = new User({
      name,
      email,
      passwordHash,
    })

    await this.usersRepository.create(user)

    return {
      user,
    }
  }
}
