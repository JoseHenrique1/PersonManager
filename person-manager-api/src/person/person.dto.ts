import { FastifyRequest } from "fastify";

export interface personDto {
  name: string,
  content: string,
  age: number
}

export type getPersonDto = FastifyRequest<{Params: {id: string}}> 

export type postPersonDto  = FastifyRequest<{Body: personDto}> 

export type updatePersonDto  = FastifyRequest<{Params: {id: string}, Body: personDto}> 

export type deletePersonDto  = getPersonDto 