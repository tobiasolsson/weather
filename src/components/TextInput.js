import React from 'react';

const TextInput = (props) => {
  const inputHandler = (e) => {
    props.newCity(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder={props.city} onChange={inputHandler} />
    </div>
  );
};

export default TextInput;
