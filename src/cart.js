import React, { Component } from 'react'

function Cart(props) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <p>Items in cart: {props.itemCount}</p>
            <p>Total: €{props.total}</p>
        </div>
    );
}

export default Cart;