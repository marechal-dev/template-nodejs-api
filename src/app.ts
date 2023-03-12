import 'reflect-metadata'

import fastify from 'fastify'
import { ZodError } from 'zod'

import { env } from './env'
import { initializeDependenciesContainer } from './shared/container'

export const app = fastify()

initializeDependenciesContainer()

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation Error.',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({
    message: 'Internal Server Error',
  })
})
