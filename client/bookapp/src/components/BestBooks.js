import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BookCard from './BookCard';
import FormButton from './FormButton';

const BestBooks = () => {
const { isAuthenticated, isLoading } = useAuth0();
const [book, setBook] = useState('');
const url = 'http://localhost:3004/';



useEffect(() => {

  const getAllBooks = () => {

    axios.get(`${url}book`)
    .then((response) => {
  
      const bookdata = response.data;
      setBook(bookdata);
     
     
      
      
    })
    .catch(error => console.error(`Error: ${error}`));
  
  }
  

  getAllBooks();
  console.log(book);
}, []);


    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="bestbooks">
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
       
        {book.length > 0 ? (
          book.map((books, idx) => {
              return(  
                isAuthenticated && ( 
              <div key={idx}>
              {/* <p >{books.title}: {books.description} </p> */}
              <BookCard key={idx} title={books.title} description={books.description}/>
              </div>
          ))
          })
          
        ) : (
          <h1>No Books available  😔 </h1>
        )}
        <FormButton/>
      </div>
    )
    // return (
     
    //     isAuthenticated && (
    //         <div style={{marginTop:"8rem"}}>
    //           <h1>No Books available  😔 </h1>
    //         </div>
    //       )
    // )
}

export default BestBooks
