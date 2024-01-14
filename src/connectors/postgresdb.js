const { Client } = require('pg');

const getPostgresClient = async () => {
  const client = new Client();

  client.on('error', (err) => {
    console.error('something bad has happened!', err.stack);
  });
  client.on('end', () => {
    console.log('Connection closed.');
  });

  await client.connect();

  return client;
};

module.exports = getPostgresClient;
