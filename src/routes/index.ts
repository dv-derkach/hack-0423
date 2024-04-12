import { FastifyInstance } from 'fastify';

import auth from './auth';

export default async (instance: FastifyInstance) => {
  await instance.register(auth, { prefix: '/auth' });
};
