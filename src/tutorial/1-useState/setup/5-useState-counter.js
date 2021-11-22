import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)
  const increaseLater = () => {
    setTimeout(()=>
    setCounter((prevCounter)=>
    prevCounter+1), 3000)
  }

  return <div>
    <h2>{counter}</h2>
    <button type="button" className="btn" onClick={()=>setCounter(counter+1)}>Increase</button>
    <button type="button" className="btn" onClick={()=>setCounter(counter-1)}>Decrease</button>
    <button type="button" className="btn" onClick={()=>setCounter(0)}>Reset</button>
    <button type="button" className="btn" onClick={increaseLater}>Increase Later</button>
  </div>
};

export default UseStateCounter;
