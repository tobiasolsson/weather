import React from 'react';
import { convertUnixTime } from '../../utility';

const Sunrise = (props) => {
  const time = convertUnixTime(props.sunset);

  return (
    <div>
      <p>Sunset: {time}</p>
    </div>
  );
};

export default Sunrise;
