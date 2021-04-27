import React from 'react';
import styles from './City.module.css';

const City = (props) => {
  const { city } = props;
  return (
    <div className={styles.City}>
      <h1>{city}</h1>
    </div>
  );
};

export default City;
