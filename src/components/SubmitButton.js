import React from 'react';

const SubmitButton = (props) => {
  const { searchHandler, newCity } = props;
  const clicked = () => {
    searchHandler(newCity);
  };

  return (
    <button onClick={clicked} type="button">
      Search
    </button>
  );
};

export default SubmitButton;
