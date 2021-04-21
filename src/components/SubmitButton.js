import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = (props) => {
  const { searchHandler, newCity } = props;
  const clicked = () => {
    searchHandler(newCity);
  };

  return (
    <button onClick={clicked} type="button" className={styles.Button}>
      search
    </button>
  );
};

export default SubmitButton;
