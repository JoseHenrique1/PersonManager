import { FastifyReply, FastifyRequest } from "fastify";
import { PersonService } from "./person.service";
import { deletePersonDto, getPersonDto, postPersonDto, updatePersonDto } from "./person.dto";

export class PersonController {
  //nao funcionou
  /* private readonly personService : PersonService;

  constructor() {
    this.personService = new PersonService();
    
  } */
  
  public async getPerson(req: getPersonDto, res: FastifyReply) {
    const {id }= req.params;
    const person = await new PersonService().person(id)
    return person;
  }

  public async getPersons(req: FastifyRequest, res: FastifyReply) {
    const persons = await new PersonService().persons()
    return persons;
  }

  public async postPerson(req: postPersonDto, res: FastifyReply) {
    const { name, content, age} = req.body
    const person = await new PersonService().create({name, content, age})
    return person;
  }

  public async updatePerson(req: updatePersonDto, res: FastifyReply) {
    const { id } = req.params;
    const { name, content, age} = req.body
    const person = await new PersonService().update(id, {name, content, age} )
    return person;
  }

  public async deletePerson(req: deletePersonDto, res: FastifyReply) {
    const { id } = req.params;
    const person = await new PersonService().delete(id)
    return person;
  }
}