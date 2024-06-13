import { prisma } from "../database/prisma";
import { personDto } from "./person.dto";

export class PersonService {

  public async person(id: string) {
    const person = await prisma.person.findUnique({
      where: {
        id
      }
    });
    return person;
  }

  public async persons() {
    const persons = await prisma.person.findMany();
    return persons;
  }

  public async create(data: personDto) {
    const person = await prisma.person.create({
      data
    });
    return person;
  }

  public async update(id: string, data: personDto) {
    const person = await prisma.person.update({
      where: {id},
      data
    });
    return person;
  }

  public async delete(id: string) {
    const person = await prisma.person.delete({
      where: {id},
    });
    return person;
  }
}