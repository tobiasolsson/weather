import React from 'react';
import { convertUnixTime } from '../../utility';
import styles from './Sun.module.css';

const Sun = (props) => {
  const sunset = convertUnixTime(props.sunset);
  const sunrise = convertUnixTime(props.sunrise);

  return (
    <ul className={styles.Sun}>
      <li className={styles.Risebox}>
        <span className={`${styles.SunIcon} ${styles.Sunrise}`}>wb_sunny</span>{' '}
        {sunrise}
      </li>
      <li className={styles.Setbox}>
        <span className={`${styles.SunIcon} ${styles.Sunset}`}>wb_sunny</span>{' '}
        {sunset}
      </li>
    </ul>
  );
};
export default Sun;
