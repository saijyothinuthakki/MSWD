  
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
  const [ weather, setWeather] = useState()
  
  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital
    }
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeather(response.data.current)
      })
  }, [country])

  return (

    <div>
      <h2><i>Weather in {country.capital}</i></h2>
        {
        weather ?
        <>
          <img src={weather.weather_icons[0]} alt="icon"></img>
               <h3><i>Observation time:</i></h3>
                <p>{weather.observation_time}</p>

               <h3><i>Temperature:</i></h3>
                <p>{weather.temperature}</p> 
              
               <h3><i>Wind: {weather.wind_speed} mph</i></h3>
               <p> Wind Direction: {weather.wind_dir}</p>
              
        </>
        :
        <p>Fetcing weather data...</p>
      }
    </div>
    
  )
}

export default Weather