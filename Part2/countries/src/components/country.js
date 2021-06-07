import React from 'react'
import Weather from './weather'

const Country = ({country}) => {
  return (
    <div>
      <h1><i>{country.name}</i></h1>
      <h3><i>Capital: {country.capital}</i></h3>
      <h3><i>Total Population: {country.population}</i></h3>
      <h2><i>Languages Spoken</i></h2>
     <>
        {country.languages.map(language => 
          <li key={language.name}><i>{language.name}</i></li>
        )}
      </>
      <img src={country.flag} alt={`Flag of ${country.name}`} width='200'/>
      <Weather country={country}/>
    </div>
  )
}

export default Country