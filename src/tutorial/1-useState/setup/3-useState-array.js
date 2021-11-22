import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }
  return (
    <div>
      {
      people.map((person)=>{
        const {id,name} = person
        return <div key={id} className="item"> 
          <h4>{name}</h4>
          <button type="button" onClick={()=>removeItem(id)}>Remove Item</button>
         </div>
      })
      }
    <button type="button" className="btn" onClick={()=>setPeople([])}>Delete All Data</button>
    </div>
  ) 
}

export default UseStateArray;
