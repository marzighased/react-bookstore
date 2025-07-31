import React, { useState } from 'react'
import Book from './book';
import Cart from './cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", price: "25" },
    { id: 2, title: "The Little Prince", author: "Antoine de Saint-Exupéry", price: "18" },
    { id: 3, title: "1984", author: "George Orwell", price: "22" },
    { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", price: "20" }
  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">  
      <h1>My Bookstore</h1>
      <Cart itemCount={cartItems.length} total={totalPrice} />
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