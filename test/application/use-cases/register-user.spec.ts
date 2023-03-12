import { describe, it, expect, beforeEach } from 'vitest'

import { RegisterUserUseCase } from '@/application/use-cases/register-user'
import { InMemoryUsersRepository } from '../repositories/in-memory-users-repository'

let usersRepository: InMemoryUsersRepository
let systemUnderTest: RegisterUserUseCase

describe('Create User Use Case Test Suite', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    systemUnderTest = new RegisterUserUseCase(usersRepository)
  })

  it('should not be possible to create an User with invalid e-mail', () => {})
  it('should not be possible to create an User with same e-mail twice', () => {})
  it('should hash User password upon registration', () => {})
  it('should be able to create a new User', () => {})
})
