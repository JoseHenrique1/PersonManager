import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config';

import { routes } from './router';

const fastify = Fastify();

fastify.register(cors, {origin: "*"}) 
fastify.register(routes);

fastify.setErrorHandler((error, request, reply) => {
  reply.status(500).send({ name: error.name, msg: error.message, erro: error.stack });
})

const PORT = Number(process.env.PORT || 3000);
fastify.listen({ port: PORT }, (err, address) => {
  if (err) { console.error(err);}
  console.log(`Server listening at ${address}`);
});