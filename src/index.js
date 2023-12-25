import Fastify from 'fastify';

import usersRoutes from './routes/users.js';

const fastify = Fastify({
  logger: true,
});

fastify.register(usersRoutes, { prefix: '/users' });

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
