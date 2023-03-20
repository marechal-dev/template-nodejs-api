import { FastifyInstance } from 'fastify'
import { usersRoutes } from './users.routes'

export async function registerAppRoutes(app: FastifyInstance) {
  app.register(usersRoutes, {
    prefix: '/users',
  })
}
