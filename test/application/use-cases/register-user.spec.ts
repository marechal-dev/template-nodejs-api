import { describe, it, expect, beforeEach } from 'vitest'

import { compare } from 'bcryptjs'

import { InMemoryUsersRepository } from '../repositories/in-memory-users-repository'
import { RegisterUserUseCase } from '@/application/use-cases/register-user'
import { UserAlreadyExistsError } from '@/application/use-cases/errors/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let systemUnderTest: RegisterUserUseCase

describe('Create User Use Case Test Suite', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    systemUnderTest = new RegisterUserUseCase(usersRepository)
  })

  it('should not be possible to create an User with same e-mail twice', async () => {
    const EMAIL = 'john.doe@gmail.com'

    await systemUnderTest.execute({
      name: 'John Doe',
      email: EMAIL,
      password: 'some-strong-password',
    })

    await expect(() =>
      systemUnderTest.execute({
        name: 'John Doe',
        email: EMAIL,
        password: 'some-strong-password',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })

  it('should hash User password upon registration', async () => {
    const PASSWORD = '123456'

    const { user } = await systemUnderTest.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: PASSWORD,
    })

    const isPasswordCorrectlyHashed = await compare(PASSWORD, user.PasswordHash)

    expect(isPasswordCorrectlyHashed).toEqual(true)
  })

  it('should be able to create a new User', async () => {
    const { user } = await systemUnderTest.execute({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: 'some-strong-password',
    })

    expect(user.ID).toEqual(expect.any(String))
  })
})
