import React from 'react';

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, pushPerson, focusName}) => {
    return (
        <form onSubmit={pushPerson}>
            <div>
                Name: <input value={newName} onChange={event => setNewName(event.target.value)} 
                    required autoComplete='off' ref={focusName}/>
            </div>
            <div>
               Phone Number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} 
                    required autoComplete='off'/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default PersonForm;