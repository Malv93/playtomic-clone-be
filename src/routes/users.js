const mockedUsers = require('../../mocks/users.json');

const userRoutes = async function (fastify) {
  fastify.get('/', async (req, res) => {
    res.send(mockedUsers);
  });

  fastify.get('/:id', async (req, res) => {
    const {
      params: { id },
    } = req;
    const user = mockedUsers.find((user) => user.id === id);

    res.send(user);
  });
}

module.exports = userRoutes