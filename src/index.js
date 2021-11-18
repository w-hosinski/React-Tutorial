import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css"

function Booklist() {
     return (
          <section>
          <Book />     
          </section>     
     )
}

const Book = () => {
     return  <article className="bookList">
          <Image/>
          <Title/>
          <Author/>
          </article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91PpDVWjhLL._AC_UL200_SR200,200_.jpg" alt="" />
const Title = () => <h1>Will</h1>
const Author = () => <h1>Will Smith</h1>





ReactDOM.render(<Booklist/>, document.getElementById("root"))