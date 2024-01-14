const Fastify = require('fastify');

const usersRoutes = require('./routes/users');
const getPostgresClient = require('./connectors/postgresdb');

const startServer = async () => {
  const fastify = Fastify({
    logger: true,
  });
  const dbClient = await getPostgresClient();

  // Register postgres DB
  fastify.decorate('dbClient', dbClient);

  // Register routes
  fastify.register(usersRoutes, { prefix: '/users' });

  // Start server
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  return fastify;
};

startServer();

module.exports = startServer;
