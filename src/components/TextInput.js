import React, { useState } from 'react';
import styles from './TextInput.module.css';

const TextInput = (props) => {
  const [typedCity, setTypedCity] = useState('');
  const { searchHandler, city, setNewCity } = props;
  const inputHandler = (e) => {
    setTypedCity(e.target.value);
  };
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      setNewCity(typedCity);
      searchHandler(typedCity);
    }
  };
  return (
    <input
      type="text"
      placeholder={city}
      onChange={inputHandler}
      onKeyPress={handleKeypress}
      className={styles.Input}
    />
  );
};

export default TextInput;
