import 'reflect-metadata';

import fastify from 'fastify';

import './configs/container';

import { globalHttpErrorHandler } from './globals/http/globalErrorHandler';
import { registerAppRoutes } from './helpers/register-app-routes';

export const app = fastify();

registerAppRoutes(app);

app.setErrorHandler(globalHttpErrorHandler);
