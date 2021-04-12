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

  async function searchHandler() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
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
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    searchHandler();
  }, []);

  return (
    <div>
      <TextInput />
      <SubmitButton searchHandler={searchHandler} setCity={setCity} />
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
