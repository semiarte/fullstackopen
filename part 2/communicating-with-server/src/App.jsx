import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "1" }
  ])
  // Controls input element
  const [newName, setNewName] = useState('')
  const handleInputNameChange = (event) => {
    setNewName(event.target.value);
  }
  // Adds new contact
  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = { 
      name: newName,
      id: String(persons.length + 1),
    }
    if (persons.some(person => person.name === newName)) {
      // Determines whether the specified callback function returns true for any element of an array
      alert(`${newName} is alredy added to phonebook`)
      return
    } else {
      // Returns a new array without modifying initial and previous arrays
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }
  
  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: 
          <input 
            type="text"
            value={newName}
            onChange={handleInputNameChange}
          />
        </div>

        <div>
          <button 
            type="submit"
            onClick={addNewPerson}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(
        person => <p key={person.id}>{person.name}</p>
      )}
    </>
  )
}

export default App