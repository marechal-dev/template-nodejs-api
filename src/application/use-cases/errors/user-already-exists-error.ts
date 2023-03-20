import { HttpStatusCodes } from '@/infra/http/constants/status-codes'
import { ApplicationError } from '@/shared/errors/application-error'
import { ErrorMessages } from '@/shared/errors/messages'

export class UserAlreadyExistsError extends ApplicationError {
  public constructor() {
    super(ErrorMessages['pt-BR'].User.AlreadyExists, HttpStatusCodes.BadRequest)
  }
}
