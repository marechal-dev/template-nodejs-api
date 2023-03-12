import { hash } from 'bcryptjs'
import { Inject, Service } from 'typedi'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/users-repository'

interface RegisterUserRequest {
  name: string
  email: string
  password: string
}

@Service()
export class RegisterUserUseCase {
  public constructor(
    @Inject('usersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  public async execute({ name, email, password }: RegisterUserRequest) {
    const passwordHash = await hash(password, 6)

    const user = new User({
      name,
      email,
      passwordHash,
    })

    await this.usersRepository.create(user)
  }
}
