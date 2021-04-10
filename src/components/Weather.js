import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import TextInput from './TextInput';
import Forecast from './forecast/Forecast';

import API_KEY from '../credentials';

const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  async function searchHandler(city = 'Öjersjö') {
    // const city = 'Partille';
    // const country = 'se';
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
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div>
      <TextInput />
      <SubmitButton searchHandler={searchHandler} />
      <Forecast
        temp={temp}
        feelsLike={feelsLike}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
      />
    </div>
  );
};

export default Weather;
