import React from 'react';
import Temp from './Temp';

const Forecast = (props) => (
  <div>
    <Temp temp={props.temp} />
    {/* <FeelsLike /> */}
    {/* <Humidity /> */}
  </div>
);

export default Forecast;
