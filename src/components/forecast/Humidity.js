import React from 'react';
import styles from './Humidity.module.css';

const Humidity = (props) => {
  const { humidity } = props;
  return <p className={styles.humidity}>Humidity: {humidity}%</p>;
};

export default Humidity;
