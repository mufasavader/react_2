import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css'
//setup vars

const books=[
  
  {

  id:1,
  img:"https://images-na.ssl-images-amazon.com/images/I/71rZvKObxUL._AC_UL200_SR200,200_.jpg",
  title:"Spooky Pookie (Little Pookie)",
  author:"Sandra Boynton"

},


{
  id:2,
  img:"https://images-na.ssl-images-amazon.com/images/I/91BQbqTW6oL._AC_UL200_SR200,200_.jpg",
  title:"Follow the Money: The Shocking Deep State Connections of the Anti-Trump Cabal",
  author:"Dan Bongino"

}
,
{
  id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
  title:"Room on the Broom ",
  author:"Julia Donaldson "

}

];


function Bestsellerlist() {
  return (
    <section className="booklist">
      {
        books.map(
        (book)=>{
          //const {img,title,author} =book;
          return (
            <Book key= {book.id} book={book}></Book>

          );


        }
          


        )
      }
    </section>
      
    
  )
}

const Book=(props)=>{
  
const {img,title,author}=props.book;
  
  return <article className='book'>
    <img src= {img}alt='book'/>
<h1>{title}</h1>
<h4>{author}</h4>

  </article>
}


ReactDOM.render(<Bestsellerlist/>,document.getElementById('root'))
