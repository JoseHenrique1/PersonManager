import { useContext } from "react";
import { ContextGoblal } from "../../provider/globalProvider";
import { Form } from "../form";
import { Icon } from "../icon";

interface formDeletePerson {
  idPerson: string,
  closeModal: () => void
}
export function FormDeletePerson({idPerson, closeModal}: formDeletePerson) {
  const {deletePerson} = useContext(ContextGoblal);

  function onSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    deletePerson(idPerson);
    closeModal();
  }

  return ( 
    <Form.root onSubmit={onSubmit}>
        <Form.between>
          <h1 className="text-gray-300 font-semibold text-xl">Delete Person</h1>
          <Icon onClick={closeModal} name="close"/>
        </Form.between>
        <Form.row>
          <Form.button type="button" onClick={closeModal}>Cancel</Form.button>
          <Form.button type="submit">Confirm</Form.button>
        </Form.row>
      </Form.root>
   );
}
