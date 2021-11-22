import React from 'react'

const Book = (props) => {
     const {img, title, author} = props
     return (
          <article className="book" onMouseOver={()=>{
               console.log(title)
          }}>
               <img src={img} alt="" />
               <h1>{title}</h1>
               <h4>{author}</h4>
               <button type="button" onClick={()=>console.log("TEST")}>Console log "Test"</button>
          </article>
     )  
}

export default Book