import React, { useState } from 'react'
import Book from './book';
import Cart from './cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", price: 25, image: "https://images-na.ssl-images-amazon.com/images/P/0439708184.01.L.jpg" },
    { id: 2, title: "The Little Prince", author: "Antoine de Saint-Exupéry", price: 18, image: "https://images-na.ssl-images-amazon.com/images/P/0156012197.01.L.jpg" },
    { id: 3, title: "1984", author: "George Orwell", price: 22, image: "https://images-na.ssl-images-amazon.com/images/P/0452284236.01.L.jpg" },
    { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", price: 20, image: "https://images-na.ssl-images-amazon.com/images/P/0061120081.01.L.jpg" }
  ];

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((item, index) => index !== indexToRemove));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">  
      <h1>My Bookstore</h1>
      <Cart itemCount={cartItems.length} total={totalPrice} cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      <div className='books-container'>
        {books.map(book => (
          <Book 
            key={book.id}
            title={book.title} 
            author={book.author} 
            price={book.price} 
            image={book.image}
            onAddToCart={() => addToCart(book)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;