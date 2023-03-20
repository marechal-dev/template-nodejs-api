import { HttpStatusCodes } from '@/infra/http/constants/status-codes'

export class ApplicationError extends Error {
  private readonly STATUS_CODE: HttpStatusCodes

  public constructor(message: string, statusCode: HttpStatusCodes) {
    super(message)
    this.STATUS_CODE = statusCode
  }

  public get Message(): string {
    return this.message
  }

  public get StatusCode(): number {
    return this.STATUS_CODE
  }
}
