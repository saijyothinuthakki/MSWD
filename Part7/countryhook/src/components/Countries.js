import React from 'react'

const Country = ({ country }) => {
    if (!country) {
      return null
    }

    if (country.length === 0) {
        return (
            <div>
            Not found...
            </div>
        )
    }

    const countryObject = country[0]

    return (
    <>
        <h3>{countryObject.name} </h3>
        <div>capital {countryObject.capital} </div>
        <div>population {countryObject.population}</div>
        <img src={countryObject.flag} height='100' alt={`flag of ${countryObject.name}`}/>
    </>
    )
  }

  export default Country