import React from 'react';

const ErrorExample = () => {
  const title = "Random Title"
  const handleClick = () => {
    title = "hello people"
    console.log(title)
  }
  return <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
  </React.Fragment>;
};

export default ErrorExample;
