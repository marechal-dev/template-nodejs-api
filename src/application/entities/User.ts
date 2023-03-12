import { Replace } from '@/helpers/replace'
import { Entity } from '../core/entities/Entity'

export interface UserProps {
  name: string
  email: string
  passwordHash: string
  createdAt: Date
}

export class User extends Entity<UserProps> {
  public constructor(
    props: Replace<UserProps, { createdAt?: Date }>,
    id?: string,
  ) {
    super({ ...props, createdAt: props.createdAt ?? new Date() }, id)
  }

  public get Name(): string {
    return this.props.name
  }

  public set Name(value: string) {
    this.props.name = value
  }

  public get Email(): string {
    return this.props.email
  }

  public set Email(value: string) {
    this.props.email = value
  }

  public get PasswordHash(): string {
    return this.props.passwordHash
  }

  public changePassword(value: string): void {
    this.props.passwordHash = value
  }
}
