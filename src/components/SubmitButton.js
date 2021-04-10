import React from 'react';

const SubmitButton = (props) => {
  const { searchHandler } = props;
  return (
    <button onClick={() => searchHandler()} type="button">
      Search
    </button>
  );
};

export default SubmitButton;
