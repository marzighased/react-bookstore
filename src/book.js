import React from 'react';
import './book.css';  

function Book(props) {
  return (
    <div className="book">
      <img src={props.image} alt={props.title} />
      
      <h3>
        {props.title}
        {props.quantityInCart > 0 && (
          <span className="quantity-badge"> ({props.quantityInCart})</span>
        )}
      </h3>
      
      <p>Author: {props.author}</p>
      <p>Price: {props.price} €</p>
      
      {props.quantityInCart > 0 ? (
        <div className="quantity-controls">
          <button 
            className="qty-btn" 
            onClick={props.onDecrease}
          >
            -
          </button>
          <span className="qty-display">{props.quantityInCart}</span>
          <button 
            className="qty-btn" 
            onClick={props.onIncrease}
          >
            +
          </button>
        </div>
      ) : (
        <button onClick={props.onAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Book;