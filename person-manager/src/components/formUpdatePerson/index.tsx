import { useContext, useState } from "react";
import { Form } from "../form";
import { Icon } from "../icon";
import { ContextGoblal } from "../../provider/globalProvider";

interface personInterface {
  id: string,
  name: string,
  age: number,
  content: string
}

interface formUpdatePerson {
  person: personInterface
  closeModal: () => void
}
export function FormUpdatePerson({person, closeModal}: formUpdatePerson) {
  
  const {updatePerson} = useContext(ContextGoblal);

  const [name, setName] = useState(person.name);
  const [age, setAge] = useState(person.age);
  const [content, setContent] = useState(person.content);

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {setName(e.target.value)}
  function onChangeAge(e: React.ChangeEvent<HTMLInputElement>) {setAge(Number(e.target.value))}
  function onChangeContent(e: React.ChangeEvent<HTMLInputElement>) {setContent(e.target.value)}

  function onSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updatePerson(person.id, name, age, content);
    closeModal();
  }

  function resetFields () {
    setName(person.name)
    setAge(person.age)
    setContent(person.content)
  }

  return ( 
    <Form.root onSubmit={onSubmit}>
        <Form.between>
          <h1 className="text-gray-300 font-semibold text-xl">Update Person</h1>
          <Icon onClick={closeModal} name="close"/>
        </Form.between>
        <Form.input value={name} placeholder="name" onChange={onChangeName} required/>
        <Form.input value={age} placeholder="age" type="number" onChange={onChangeAge} required/>
        <Form.input value={content} placeholder="content" onChange={onChangeContent} required/>
        <Form.row>
          <Form.button type="button" onClick={resetFields}>Reset</Form.button>
          <Form.button type="submit">Save</Form.button>
        </Form.row>
      </Form.root>
   );
}
