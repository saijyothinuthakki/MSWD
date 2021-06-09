import React, { useState, useRef, useEffect } from 'react';
import personService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PForm';
import Persons from './components/Persons';
import Notification from './components/Error';
import './index.css';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filtername, setFilterName ] = useState('');
  const [ message, setMessage ] = useState(null);
  const [ error, setError] = useState('');

  const focusName = useRef();
  const clearInput = () => 
  {
    setNewName('');
    setNewNumber('');
    focusName.current.focus();    
  };
  
  useEffect(() => 
  {
    personService.getAll()
    .then(setPersons);
  }, []);

  const popPerson = (id, name) => 
  {
    if (window.confirm(`Delete ${name}?`)) 
    {
      personService.remove(id)
      .then(() => 
      {
        setPersons(persons.filter(person => person.id !== id));
        setMessage(`Deleted ${name}`);
        setError('info');
      });
    } 
  };
  const pushPerson = event =>
   {
    event.preventDefault();
    const presentPerson = persons.find(person => person.name === newName);
    if (presentPerson) 
    {
      window.confirm(`${newName} is already added to phonebook, do you want to replace the old number with a new one?`) &&
      personService.update(presentPerson.id, {number: newNumber})
      .then(updatedPerson =>
         {
        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));
        
        setMessage(`Updated ${newName}'s number`);
        setError('info');

        clearInput();
      })
      .catch(error => 
        {
        if (error.name === 'TypeError') {
          setMessage(`${newName} has already been deleted `);
          setPersons(persons.filter(person => person.id !== presentPerson.id));
        } else {
          setMessage(error.response.data.error);
        }
       setError('error');
      });
    } else 
    {
      personService.create(newName, newNumber)
      .then(newPerson => 
        {
        setPersons(persons.concat(newPerson));
        setMessage(`Added ${newName}`);
        setError('info');
        clearInput();
      })
      .catch(error => 
        {
        setMessage(error.response.data.error);
        setError('error');
      });
    }
  };
  return (
    <>
      <h1><i>Phonebook</i></h1>
      <Notification message={message} error={error} setMessage={setMessage} setError={setError} />
      <Filter filtername={filtername} setFilterName={setFilterName} />

      <h1><i>Add a new</i></h1>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
      pushPerson={pushPerson} focusName={focusName}/>
      
      <h1><i>Numbers</i></h1>
      <Persons persons={persons} filtername={filtername} popPerson={popPerson} />
    </>
  );
};
export default App;