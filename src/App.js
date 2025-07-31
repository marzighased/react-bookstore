import React, { Component } from 'react'
import Book from './book';
import Cart from './cart';

function App() {
  const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", price: "25" },
    { id: 2, title: "The Little Prince", author: "Antoine de Saint-Exupéry", price: "18" },
    { id: 3, title: "1984", author: "George Orwell", price: "22" },
    { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", price: "20" }
  ];

  return (
    <div>
      <h1>My Bookstore</h1>
      <Cart itemCount="0" total="0" />
      <div className='books-container'>
        {books.map(book => (
          <Book 
            key={book.id}
            title={book.title} 
            author={book.author} 
            price={book.price} 
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;