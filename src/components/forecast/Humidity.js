import React from 'react';

const Humidity = (props) => (
  <p style={{ fontWeight: '200', margin: '30px 50px auto 10px' }}>
    Humidity: {props.humidity}%
  </p>
);

export default Humidity;
