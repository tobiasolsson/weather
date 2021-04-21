import React from 'react';
import styles from './Temp.module.css';

const Temp = (props) => (
  <div className={styles.Temp}>
    <p>{props.temp}°C</p>
  </div>
);

export default Temp;
