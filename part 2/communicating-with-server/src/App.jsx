import { useState } from "react"
import { Filter, PersonForm, Persons } from './components/phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "1", number: "040-44-532523" },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  // Controls input element
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleInputNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleInputPhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  // Filters people by name
  const searchName = (event) => {
    setNewSearch(event.target.value)
  }
  const filteredPersons = persons.filter(person => 
    person.name.includes(newSearch)
  );

  // Adds new contact
  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = { 
      name: newName,
      id: String(persons.length + 1),
      number: newPhone,
    }
    if (persons.some(person => person.name === newName)) {
      // Determines whether the specified callback function returns true for any element of an array
      alert(`${newName} is alredy added to phonebook`)
      return
    } else {
      // Returns a new array without modifying initial and previous arrays
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewPhone("")
    }
  }
  return (
    <>
      <h2>Phonebook</h2>
      <Filter 
        label="Filter show with:"
        newSearch={newSearch}
        searchName={searchName}
      />
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName}
        newPhone={newPhone}
        handleInputNameChange={handleInputNameChange}
        handleInputPhoneChange={handleInputPhoneChange}
        addNewPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      {filteredPersons.map(
        person => <Persons key={person.id} name={person.name} number={person.number} />
      )}
    </>
  )
}

export default App