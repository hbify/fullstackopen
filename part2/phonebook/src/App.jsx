import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [updateFlag, setUpdateFlag] = useState(false)
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [updateFlag])

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);

  }
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);

  }
  const handleFilterTextChange = (event) => {
    console.log('filter text', event.target.value);
    setFilterText(event.target.value);

  }
  const handleDelete = id => {
    const person = persons.find(p => p.id === id)

    if (confirm(`delete ${person.name}`)) {
      personService
        .remove(id)
        .then(() => setUpdateFlag(!updateFlag))
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const newPerson = {
      'name': newName,
      'number': newNumber
    }
    // Check if the name already exists in the phonebook
    const person = persons.find(p => p.name === newName)
    if (person) {
      if (person.name.toLowerCase() === newName.toLowerCase()) {

        if (confirm(`${person.name} already added to the phonebook, replace the old number with the new one`)) {
          personService
            .update(person.id, newPerson)
            .then(() => {
              setUpdateFlag(!updateFlag)
              setSuccess(true)
              setMessage('Person updated successfully')
              setTimeout(() => { setMessage(null) }, 5000)
            })
            .catch(error => {
              setSuccess(false)
              setMessage(
                `Person '${person.name}' was already removed from server`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
        }
      }
    }
    else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setSuccess(true)
          setMessage('Person Added successfully')
          setTimeout(() => { setMessage(null) }, 5000)
          setNewName('')
          setNewNumber('')
        })
    }

  }
  console.log(persons);
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} success={success}/>
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
        handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>

      <Persons
        persons={filteredPersons}
        handleDelete={handleDelete} />
    </div>
  )
}

export default App