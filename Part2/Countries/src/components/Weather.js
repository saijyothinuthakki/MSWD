import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({country}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital
        };

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => setData(response.data.current));
    }, [country]);

    return (
        <div>
        <h3>Weather in {country.capital}</h3>
            {
                data ?
                <>
                    <h3><strong>Temperature:</strong> {data.temperature} celcius</h3>
                    <img src={data.weather_icons[0]} alt='Weather icon' />
                    <h3><strong>Wind:</strong> {data.wind_speed} mph, direction {data.wind_dir}</h3>
                </>
                :
                <h3>Loading weather data...</h3>
            }
        </div>
    );
};

export default Weather;