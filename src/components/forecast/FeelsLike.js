import React from 'react';

const FeelsLike = (props) => (
  <p style={{ fontSize: '12px', fontWeight: '200' }}>
    Feels like: {Math.round(props.feels)}°C
  </p>
);

export default FeelsLike;
