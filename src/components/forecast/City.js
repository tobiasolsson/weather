import React from 'react';
import styles from './City.module.css';

const City = (props) => (
  <div className={styles.City}>
    <h1>{props.city}</h1>
  </div>
);

export default City;
