import React from 'react';



const Persons = ({persons, filtername, popPerson}) => {
    return (
        persons.length ?
        <ul style={{listStyle: 'none', padding: 0}}>
            {
                persons.filter(person => person.name.toLowerCase().includes(filtername.toLowerCase()))
                .map(person => (
                    <li key={person.name}>
                        {person.name} {person.number} &nbsp;
                        <button onClick={() => popPerson(person.id, person.name)}>Delete</button>
                    </li>
                ))
            }
        </ul>
        :
        <h3>contacts are loading...</h3>
    );
};

export default Persons;