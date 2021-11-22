import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css"
import {books} from "./books"
import SpecificBook from "./Book"

function Booklist() {
     return (
          <section className="bookList">
               {books.map((book) =>{
                    return <SpecificBook key={book.id} {...book}/> 
               })}
          </section>     
     )
}



ReactDOM.render(<Booklist/>, document.getElementById("root"))