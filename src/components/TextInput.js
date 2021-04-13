import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        placeholder={city}
        onChange={inputHandler}
        onKeyPress={handleKeypress}
      />
    </div>
  );
};

export default TextInput;
