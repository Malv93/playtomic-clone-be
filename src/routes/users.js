const mockedUsers = require('../../mocks/users.json');

const userRoutes = async function (fastify) {
  const { dbClient } = fastify;

  // Get all users
  fastify.get('/', async (req, res) => {
    const users = await dbClient.query({
      text: 'SELECT * FROM public.users',
    });

    res.send(users);
  });

  // Get user by Id (mocked)
  fastify.get('/:id', async (req, res) => {
    const {
      params: { id },
    } = req;
    const user = mockedUsers.find((user) => user.id === id);

    res.send(user);
  });
};

module.exports = userRoutes;
