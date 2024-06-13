import { useState } from "react";
import { Icon } from "../icon";
import { FormDeletePerson } from "../formDeletePerson";
import { FormUpdatePerson } from "../formUpdatePerson";

interface cardProps {
  idPerson: string,
  name : string,
  age : number,
  content : string
}

type formType = "update"|"delete"|""
export function Card({idPerson,name, age, content}: cardProps) {
  const [form, setForm] = useState<formType>("");

  function closeForm () {
    setForm("")
  }

  function openFormUpdate () {
    setForm("update")
  }

  function openFormDelete () {
    setForm("delete")
  }
  return ( 
    <div className="w-full p-2 flex gap-2 bg-slate-900">
        <div className="flex-grow grid grid-cols-12">
          <h1 className="text-white text-xl col-span-11">{name}</h1>
          <p className="text-gray-400 text-xl col-span-1">{age}</p>
          <p className="text-gray-400 col-span-12">{content}</p>
        </div>

        <div className="shrink-0 space-y-2" >
          <Icon name="edit" onClick={openFormUpdate}/>
          <Icon name="delete" onClick={openFormDelete}/>
        </div>

        {form == "update" && <FormUpdatePerson person={{id:idPerson, name, age, content}} closeModal={closeForm} />}
        {form == "delete" && <FormDeletePerson idPerson={idPerson} closeModal={closeForm} />}

      </div>
   );
}
