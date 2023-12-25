import mockedUsers from '../../mocks/users.json' assert { type: 'json' };

export default async function (fastify) {
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
