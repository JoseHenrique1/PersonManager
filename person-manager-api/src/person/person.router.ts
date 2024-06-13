import { FastifyInstance } from "fastify";
import { PersonController } from "./person.controller";
import {
  personSchema,
  personDbSchema,
  getPersonsSchema,
  getPersonSchema,
  postPersonSchema,
  updatePersonSchema,
  deletePersonSchema
} from "./person.schema";

export async function personRouter(fastify: FastifyInstance) {
  fastify.addSchema(personSchema);
  fastify.addSchema(personDbSchema);

  fastify.get('/', { schema: getPersonsSchema }, new PersonController().getPersons);
  fastify.get('/:id', { schema: getPersonSchema }, new PersonController().getPerson);
  fastify.post('/', { schema: postPersonSchema }, new PersonController().postPerson);
  fastify.put('/:id', { schema: updatePersonSchema }, new PersonController().updatePerson);
  fastify.delete('/:id', { schema: deletePersonSchema }, new PersonController().deletePerson);
}