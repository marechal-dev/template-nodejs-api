import { User, UserProps } from '@/application/entities/User'

type Override = Partial<UserProps>

export class UserFactory {
  public static create(override: Override = {}) {
    return new User({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      passwordHash: 'some-intense-password',
      ...override,
    })
  }
}
