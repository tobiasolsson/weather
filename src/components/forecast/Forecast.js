import React from 'react';
import Temp from './Temp';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Sunrise from './Sunrise';
import Sunset from './Sunset';

const Forecast = (props) => (
  // TODO: Cloud, Precipitation
  <div>
    <Temp temp={props.temp} />
    <FeelsLike feels={props.feelsLike} />
    <Humidity humidity={props.humidity} />
    <Sunrise sunrise={props.sunrise} />
    <Sunset sunset={props.sunset} />
  </div>
);

export default Forecast;
