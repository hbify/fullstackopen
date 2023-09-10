import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('') 

  const handleNameChange = (event) => { 
    console.log(event.target.value);
    setNewName(event.target.value);

  }
  const handleNumberChange = (event) => { 
    console.log(event.target.value);
    setNewNumber(event.target.value);

  }
  const handleFilterTextChange = (event) => { 
    console.log('filter text',event.target.value);
    setFilterText(event.target.value);

  }
  const addPerson = (event) => { 
    event.preventDefault();
    console.log('button clicked', event.target);
    const newPerson = { 
      'name': newName, 
      'number': newNumber, 
      'id': persons.length +1
    }
    // Check if the name already exists in the phonebook
    if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return;
  }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
   }

   const filteredPersons = persons.filter((person) =>
   person.name.toLowerCase().includes(filterText.toLowerCase())
 );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        filterText={filterText} 
        handleFilterTextChange={handleFilterTextChange} />

      <h3>Add a new</h3>

      <PersonForm 
        persons={persons} 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>

      <Persons 
      persons={filteredPersons}/>
    </div>
  )
}

export default App