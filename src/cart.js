import React, { Component } from 'react'

function Cart(props) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <p>Items in cart: {props.itemCount}</p>

            {props.cartItems.length > 0 ? (
                <div className="cart-items">
                {props.cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                    <span>{item.title}</span>
                    <span>€{item.price}</span>
                    <button 
                        className="remove-btn"
                        onClick={() => props.onRemoveFromCart(index)}>❌</button>
                    </div>
                ))}
                </div>
            ) : (
                <p>Cart is empty</p>
            )}
            <p>Total: €{props.total}</p>
        </div>
    );
}

export default Cart;