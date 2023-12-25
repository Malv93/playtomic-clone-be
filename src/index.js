const Fastify = require('fastify');

const usersRoutes = require('./routes/users.js');

const fastify = Fastify({
  logger: true,
});

fastify.register(usersRoutes, { prefix: '/users' });

const startServer = async () => {
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
