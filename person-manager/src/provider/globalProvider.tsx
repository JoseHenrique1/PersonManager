import { createContext, useState } from 'react';
const API = import.meta.env.VITE_API;

interface personInterface {
  id: string,
  name: string,
  age: number,
  content: string
}

interface contextProviderProps  {
  children: React.ReactNode;
};

interface ContextType {
  persons: personInterface[],
  setPersons: React.Dispatch<React.SetStateAction<personInterface[]>>,
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  getPersons: () => Promise<personInterface[]>,
  postPerson: (name:string, age:number, content: string) => Promise<boolean>,
  deletePerson: (id:string) => void,
  updatePerson: (id:string, name:string, age:number, content: string) => void
  
};

export const ContextGoblal = createContext({} as ContextType);

export function ContextProvider ({ children }: contextProviderProps) {
  const [persons, setPersons] = useState<personInterface[]>([]);
  const [search, setSearch] = useState("");

  async function getPersons() {
    const req = await fetch(API + "persons");
    const data: personInterface[] = await req.json();
    return data;
  }

  async function postPerson(name:string, age:number, content: string) {
    const data = {
      name,
      age,
      content
    }
    const req = await fetch(API+"persons",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(dt=>dt.json())
    .then((person: personInterface)=>{
      if (person.id) {
        setPersons(prev=>[...prev, person])
        return true
      }
      else {
        return false
      }
    })
    .catch((erro)=>{
      console.log(erro);
      return false
    });

    return req;
    
  }

  function deletePerson(id: string) {
    fetch(API + "persons/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(dt=>dt.json())
    .then((data: personInterface)=>{
      setPersons(prev=>prev.filter(personCurrent=>personCurrent.id != data.id))
    })
  }

  async function updatePerson(id: string, name:string, age:number, content: string) {
    const data = {
      name,
      age,
      content
    }
    fetch(API + "persons/" + id, {
      method: "put",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(dt=>dt.json())
    .then((data: personInterface)=>{
      const index = persons.findIndex(pr=>pr.id == id);
      setPersons((prev)=>{
        const prevCopy = [...prev];
        prevCopy[index] = data;
        return prevCopy;
      })
      
    })
  }



  return (
    <ContextGoblal.Provider
      value={{
        persons,
        setPersons,
        search,
        setSearch,
        getPersons,
        postPerson,
        deletePerson,
        updatePerson
        
      }}
    >
      {children}
    </ContextGoblal.Provider>
  );
};