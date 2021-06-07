import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Country from './components/country'

const App = () => 
{
  const [countries, setCountries] = useState([])
  const [findCountry, setfindCountry] = useState('')

  const filteredCountries = countries.filter
  (
    country =>country.name.toLowerCase().includes(findCountry.toLowerCase())

  )
  useEffect(() => 
  {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handlefindCountry = (event) => 
  {
    setfindCountry(event.target.value)
  }

  const handleClickonCountry= (event) => 
  {
    setfindCountry(event.target.value)
  }
  const countryDisplay = (countries) => 
  {
    const len = countries.length
    if(len === 1) 
    {
      return <Country country={filteredCountries[0]}/>
    }
     else if(len < 11) 
     {
      return countries.map(country =>
        <div key={country.name}>
          {country.name}<button onClick={handleClickonCountry} value={country.name}>show</button>
        </div>
      )
    } else if(len>11)
    {
      return <div>Too many matches, specify another filter</div>
    }
    else
    {
      return <div>No results found!!</div >

    }
  }
  return (
    <>
      <h1><i>Find countries</i></h1> 
      <input value={findCountry} onChange={handlefindCountry} />
      {countryDisplay(filteredCountries)}
    </>
  )
}

export default App