import { app as server} from './app';
import { env } from './configs/env';

const APPLICATION_HOST = '0.0.0.0';

server
  .listen({
    host: APPLICATION_HOST,
    port: env.PORT,
  })
  .then(() => {
    console.log(`🤘 Server running at http://localhost:${env.PORT}`);
    console.log('⚡ Powered by Fastify');
  });
