import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [user,setUser] = useState("default user")


  useEffect(()=>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((user)=>{
      const {login} = user
      setUser(login)
      setIsLoading(false)
    })
  },[])

  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <h1>Error</h1>
  return <h1>{user}</h1>
};

export default MultipleReturns;
