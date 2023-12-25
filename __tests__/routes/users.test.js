const startServer = require('../../src/index');
const mockedUsers = require('../../mocks/users.json');

describe('users routes', () => {
  let fastify;

  beforeAll(async () => {
    fastify = await startServer();
  });

  afterAll(async () => {
    await fastify.close();
  });

  describe('GET /users', () => {
    it('should return the users and status 200', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/users',
      });

      expect(response.statusCode).toStrictEqual(200);
      expect(JSON.parse(response.body)).toStrictEqual(mockedUsers);
    });
  });

  describe('GET /users/:id route', () => {
    it('should return the user with the specified id and status 200', async () => {
      const userId = '0002';
      const response = await fastify.inject({
        method: 'GET',
        url: `/users/${userId}`,
      });

      expect(response.statusCode).toStrictEqual(200);
      expect(JSON.parse(response.body)).toStrictEqual(mockedUsers[1]);
    });
  });
});
