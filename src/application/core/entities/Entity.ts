import { randomUUID } from 'crypto'

export abstract class Entity<TProps = any> {
  private readonly _id: string
  protected readonly props: TProps

  public constructor(props: TProps, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  public get ID(): string {
    return this._id
  }
}
