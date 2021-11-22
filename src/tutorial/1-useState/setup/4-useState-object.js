import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:"peter", age:24, message:"random Message"})
  const changeMessage = () => {
    setPerson({...person, message:"TEST"})
  }
  return(
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        change message
      </button>
    </div>
  ) 
};

export default UseStateObject;
