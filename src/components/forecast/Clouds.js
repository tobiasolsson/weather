import React from 'react';
import styles from './Clouds.module.css';

const Clouds = (props) => {
  const { clouds } = props;
  return <p className={styles.Cloud}>{clouds}</p>;
};

export default Clouds;
