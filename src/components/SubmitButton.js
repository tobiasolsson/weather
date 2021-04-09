/* eslint-disable no-console */
import React from 'react';
import API_KEY from '../credentials';

const SubmitButton = () => {
  const searchHandler = async () => {
    const city = 'Partille';
    // const country = 'se';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        { mode: 'cors' },
      );
      const myJson = await response.json();
      console.log('response', response);
      console.log('jsonData', myJson);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <button onClick={searchHandler} type="button">
      Search
    </button>
  );
};

export default SubmitButton;
