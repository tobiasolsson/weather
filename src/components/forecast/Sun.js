import React from 'react';
import { convertUnixTime } from '../../utility';
import styles from './Sun.module.css';

const Sun = (props) => {
  const { sunrise, sunset } = props;
  const sunsetTime = convertUnixTime(sunset);
  const sunriseTime = convertUnixTime(sunrise);

  return (
    <ul className={styles.Sun}>
      <li className={styles.Risebox}>
        <span className={`${styles.SunIcon} ${styles.Sunrise}`}>wb_sunny</span>{' '}
        {sunriseTime}
      </li>
      <li className={styles.Setbox}>
        <span className={`${styles.SunIcon} ${styles.Sunset}`}>wb_sunny</span>{' '}
        {sunsetTime}
      </li>
    </ul>
  );
};
export default Sun;
