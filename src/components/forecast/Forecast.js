import React from 'react';
import Temp from './Temp';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import City from './City';
import Clouds from './Clouds';

const Forecast = (props) => {
  const { city, temp, clouds, feelsLike, humidity, sunrise, sunset } = props;
  return (
    <div>
      <City city={city} />
      <Temp temp={temp} />
      <Clouds clouds={clouds} />
      <FeelsLike feels={feelsLike} />
      <Humidity humidity={humidity} />
      <Sunrise sunrise={sunrise} />
      <Sunset sunset={sunset} />
    </div>
  );
};

export default Forecast;
