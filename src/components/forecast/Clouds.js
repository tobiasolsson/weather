import React from 'react';
import styles from './Clouds.module.css';

const Clouds = (props) => <p className={styles.Cloud}>{props.clouds}</p>;

export default Clouds;
