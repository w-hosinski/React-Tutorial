import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("default stuff")
  const handleClick = () => {
    if(text==="TEST") setText("default stuff")
    else setText("TEST")
  }
  return (
    <div>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Change to TEST</button>
    </div>
  )
};

export default UseStateBasics;
