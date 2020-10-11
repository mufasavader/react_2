import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css'
//setup vars


const firstBook={
  image:"https://images-na.ssl-images-amazon.com/images/I/91BQbqTW6oL._AC_UL200_SR200,200_.jpg",
  title:"Follow the Money: The Shocking Deep State Connections of the Anti-Trump Cabal",
  author:"Dan Bongino"

}

const secondBook={
  image:"https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
  title:"Room on the Broom ",
  author:"Julia Donaldson "

}



function Bestsellerlist() {
  return (
    <section className="booklist">
     
     <Book 
     img={firstBook.image} 
     title={firstBook.title}
      author={firstBook.author}/>
     
     <Book 
     img={secondBook.image} 
     title={secondBook.title} 
     author={secondBook.author}/>
     
    </section>
      
    
  )
}

const Book=({img,title,author})=>{
  
  //const {img,title,author}=props
  
  return <article className='book'>
    <img src= {img}alt='book'/>
<h1>{title}</h1>
<h4>{author}</h4>

  </article>
}


ReactDOM.render(<Bestsellerlist/>,document.getElementById('root'))
