import { FastifyReply, FastifyRequest } from 'fastify'

import { RegisterUserUseCase } from '@/application/use-cases/register-user'

import { HttpStatusCodes } from '../constants/status-codes'
import { registerUserBodyValidator } from '../validators/register-user-body-validator'
import { container } from 'tsyringe'

export class RegisterUserController {
  public async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const data = registerUserBodyValidator.parse(request.body)

    const registerUserUseCase = container.resolve(RegisterUserUseCase)

    await registerUserUseCase.execute(data)

    return reply.status(HttpStatusCodes.Created).send()
  }
}
