import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import TextInput from './TextInput';
import Forecast from './forecast/Forecast';

import API_KEY from '../credentials';

const Weather = () => {
  const [feelsLike, setFeelsLike] = useState();
  const [humidity, setHumidity] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [clouds, setClouds] = useState(0);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('Öjersjö');
  const [newCity, setNewCity] = useState('');

  async function searchHandler(citySerched = city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${citySerched}&units=metric&appid=${API_KEY}`,
        { mode: 'cors' },
      );
      const data = await response.json();
      console.log('data', data);
      setTemp(data.main.temp);
      setFeelsLike(data.main.feels_like);
      setHumidity(data.main.humidity);
      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setClouds(data.weather[0].description);
      setCity(citySerched);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    searchHandler();
  }, []);

  return (
    <div>
      <TextInput newCity={setNewCity} city={city} />
      <SubmitButton searchHandler={searchHandler} newCity={newCity} />
      <Forecast
        temp={temp}
        feelsLike={feelsLike}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        clouds={clouds}
        city={city}
      />
    </div>
  );
};

export default Weather;
