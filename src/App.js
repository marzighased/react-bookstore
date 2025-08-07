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
    const existingItem = cartItems.find(item => item.id === book.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item.id !== bookId));
  };

  const decreaseQuantity = (bookId) => {
    setCartItems(cartItems.map(item => {
      if (item.id === bookId) {
        if (item.quantity === 1) {
          return null; 
        }
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item !== null));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="app">
      <h1>My Bookstore</h1>
      <Cart 
        itemCount={totalItems}
        total={totalPrice} 
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onDecreaseQuantity={decreaseQuantity}
        onIncreaseQuantity={addToCart}
      />
      <div className='books-container'>
        {books.map(book => {
          const cartItem = cartItems.find(item => item.id === book.id);
          const quantityInCart = cartItem ? cartItem.quantity : 0;

          return (
            <Book 
              key={book.id}
              title={book.title} 
              author={book.author} 
              price={book.price} 
              image={book.image}
              quantityInCart={quantityInCart}
              onAddToCart={() => addToCart(book)}
              onIncrease={() => addToCart(book)}
              onDecrease={() => decreaseQuantity(book.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;