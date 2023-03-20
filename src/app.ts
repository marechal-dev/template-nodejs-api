import 'reflect-metadata'

import fastify from 'fastify'

import './shared/container'

import { applicationErrorHandler } from './shared/errors/application-error-handler'
import { registerAppRoutes } from './infra/http/routes'

export const app = fastify()

registerAppRoutes(app)

app.setErrorHandler(applicationErrorHandler)
