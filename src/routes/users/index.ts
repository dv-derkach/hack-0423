import { FastifyInstance } from 'fastify';

import get from './get';
import id from './id';

export default async (instance: FastifyInstance) => {
  await instance.register(get);
  await instance.register(id, { prefix: '/:id' });
};
