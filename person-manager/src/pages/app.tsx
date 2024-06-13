import { useContext, useEffect, useState } from "react";
import { Card } from "../components/card";
import { SearchPerson } from "../components/searchPerson";
import { Icon } from "../components/icon";
import { ContextGoblal } from "../provider/globalProvider";
import { FormCreatePerson } from "../components/formCreatePerson";

function App() {
  const {
    getPersons, 
    setPersons, 
    persons,  
    search, 
    setSearch
  } = useContext(ContextGoblal);

  const [show, setShow] = useState(false)
  
  function closeModal () {
    setShow(false)
  }

  function openModal () {
    setShow(true)
  }

  useEffect(() => {
    getPersons()
      .then(personsCurrent => setPersons(personsCurrent))
  }, [])

  const personsFiltered = persons.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="flex flex-col min-h-screen 
      bg-gradient-to-br from-slate-700 from-5% via-slate-900 to-slate-950">

     
      
      {show && <FormCreatePerson closeModal={closeModal}/>}

      <main className="flex-grow w-full max-w-screen-lg space-y-4 p-4 lg:mx-auto ">
        <h1 className="text-6xl text-white font-semibold">Person Manager</h1>
        <div className="flex gap-4">
          <SearchPerson value={search} onChange={e => setSearch(e.target.value)} />
          <Icon onClick={openModal} name="user-more" />
        </div>
        <div className="space-y-2">
          {persons.length == 0 ?
            <p>Create new instances</p> :
            personsFiltered.map(person => (
              <Card 
                key={person.id} 
                idPerson={person.id}
                name={person.name} 
                age={person.age} 
                content={person.content} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default App
