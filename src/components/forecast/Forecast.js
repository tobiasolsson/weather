import React from 'react';
import Temp from './Temp';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Sun from './Sun';
import City from './City';
import Clouds from './Clouds';
import styles from './Forecast.module.css';

const Forecast = (props) => {
  const { city, temp, clouds, feelsLike, humidity, sunrise, sunset } = props;
  return (
    <div className={styles.main}>
      <City city={city} />
      <Temp temp={temp} />
      <FeelsLike feels={feelsLike} />
      <Clouds clouds={clouds} />
      <Humidity humidity={humidity} />
      <Sun sunset={sunset} sunrise={sunrise} />
    </div>
  );
};

export default Forecast;
