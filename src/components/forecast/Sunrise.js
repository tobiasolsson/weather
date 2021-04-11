import React from 'react';
import { convertUnixTime } from '../../utility';

const Sunrise = (props) => {
  const time = convertUnixTime(props.sunrise);

  return (
    <div>
      <p>Sunrise: {time}</p>
    </div>
  );
};

export default Sunrise;
