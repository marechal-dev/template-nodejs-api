import { app } from './app'
import { env } from './env'

const APPLICATION_HOST = '0.0.0.0'

app
  .listen({
    host: APPLICATION_HOST,
    port: env.PORT,
  })
  .then(() => {
    console.log(`🤘 Server running at http://localhost:${env.PORT}`)
    console.log('⚡ Powered by Fastify')
  })
