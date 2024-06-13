import { useContext, useState } from "react";
import { Form } from "../form";
import { Icon } from "../icon";
import { ContextGoblal } from "../../provider/globalProvider";

interface formCreatePerson {
  closeModal: () => void
}
export function FormCreatePerson({closeModal}: formCreatePerson) {
  const {postPerson} = useContext(ContextGoblal);

  function resetFields () {
    setName("")
    setAge(0)
    setContent("")
  }

  function createPerson (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    postPerson(name, age, content)
    .then((bool)=>{
      if (!bool) {
        alert("error")
      }
      else {
        resetFields()
        closeModal()
      }
    })
    
  }

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [content, setContent] = useState("");

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {setName(e.target.value)}
  function onChangeAge(e: React.ChangeEvent<HTMLInputElement>) {setAge(Number(e.target.value))}
  function onChangeContent(e: React.ChangeEvent<HTMLInputElement>) {setContent(e.target.value)}
  return ( 
    <Form.root onSubmit={createPerson}>
        <Form.between>
          <h1 className="text-gray-300 font-semibold text-xl">Create Person</h1>
          <Icon onClick={closeModal} name="close"/>
        </Form.between>
        <Form.input placeholder="name" onChange={onChangeName} required/>
        <Form.input placeholder="age" type="number" onChange={onChangeAge} required/>
        <Form.input placeholder="content" onChange={onChangeContent} required/>
        <Form.row>
          <Form.button>Save</Form.button>
          <Form.button type="reset" onClick={resetFields}>Reset</Form.button>
        </Form.row>
      </Form.root>
   );
}
