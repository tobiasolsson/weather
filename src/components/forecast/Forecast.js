import React from 'react';
import Temp from './Temp';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import City from './City';
import Clouds from './Clouds';

const Forecast = (props) => (
  <div>
    <City city={props.city} />
    <Temp temp={props.temp} />
    <Clouds clouds={props.clouds} />
    <FeelsLike feels={props.feelsLike} />
    <Humidity humidity={props.humidity} />
    <Sunrise sunrise={props.sunrise} />
    <Sunset sunset={props.sunset} />
  </div>
);

export default Forecast;
