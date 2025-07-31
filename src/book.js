import React, { Component } from 'react'
import './book.css'

function Book(props) {
    return (
        <div className="book">
            <h3>{props.title}</h3>
            <p>Author: {props.author}</p>
            <p>Price: {props.price} €</p>
            <button onClick={props.onAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Book;