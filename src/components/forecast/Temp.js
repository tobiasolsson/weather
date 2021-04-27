import React from 'react';
import styles from './Temp.module.css';

const Temp = (props) => {
  const { temp } = props;
  return <p className={styles.Temp}>{Math.round(temp)}°C</p>;
};

export default Temp;
