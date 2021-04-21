import React from 'react';
import styles from './Temp.module.css';

const Temp = (props) => (
  <p className={styles.Temp}>{Math.round(props.temp)}°C</p>
);

export default Temp;
