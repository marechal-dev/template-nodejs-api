import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

import { env } from '@/env'

import { HttpStatusCodes } from '@/infra/http/constants/status-codes'
import { ApplicationError } from './application-error'

export function applicationErrorHandler(
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    return reply.status(HttpStatusCodes.BadRequest).send({
      message: 'Validation Error.',
      issues: error.format(),
    })
  }

  if (error instanceof ApplicationError) {
    return reply.status(error.StatusCode).send({
      message: error.Message,
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(HttpStatusCodes.InternalServerError).send({
    message: 'Internal Server Error',
  })
}
