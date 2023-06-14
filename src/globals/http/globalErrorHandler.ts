import { env } from '../../configs/env';
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { ZodError } from 'zod';

export function globalHttpErrorHandler(error: FastifyError, _: FastifyRequest, reply: FastifyReply) {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Data validation error',
      issues: error.format(),
    });
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error);
  } else {
    // Here you can define your own Error Logging logic!
  }

  return reply.status(500).send({
    message: 'Internal Server Error',
  });
}
