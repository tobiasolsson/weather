import React from 'react';
import styles from './Humidity.module.css';

const Humidity = (props) => (
  <p className={styles.humidity}>Humidity: {props.humidity}%</p>
);

export default Humidity;
