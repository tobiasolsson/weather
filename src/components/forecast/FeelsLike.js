import React from 'react';

const FeelsLike = (props) => {
  const { feels } = props;
  return (
    <p style={{ fontSize: '12px', fontWeight: '200' }}>
      Feels like: {Math.round(feels)}°C
    </p>
  );
};

export default FeelsLike;
