import { UserFactory } from 'test/factories/user-factory'
import { describe, it, expect } from 'vitest'

describe('User Entity Test Suite', () => {
  it('should create an User', () => {
    const user = UserFactory.create()

    expect(user).toBeTruthy()
  })
})
