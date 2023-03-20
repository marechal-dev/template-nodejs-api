import { FastifyInstance } from 'fastify'
import { RoutesNames } from '../constants/routes-names'
import { RegisterUserController } from '../controllers/register-user'

export async function usersRoutes(app: FastifyInstance) {
  const registerUserController = new RegisterUserController()

  app.post(RoutesNames.users.register, registerUserController.handle)
}
