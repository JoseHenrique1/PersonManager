import { FastifyInstance } from "fastify";
import { personRouter } from './person/person.router';

export async function routes (fastify: FastifyInstance) {
  fastify.register(personRouter, {prefix: "/persons"}) ;
}