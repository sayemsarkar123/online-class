import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  const discountPrice = cart.reduce((total, course) => total + course.price.amount ,0);
  const totalPrice = cart.reduce((total, course) => total + course.price.list_price, 0);
  return (
    <div className="row">
      <div className="col-md-6 ml-auto">
        <h3 style={{ color: '#ccc' }}>Total: {cart.length}</h3>
        <h2>${discountPrice.toFixed(2)}</h2>
        <h3 style={{color: '#ccc'}}><del>${totalPrice.toFixed(2)}</del></h3>
        <h3 style={{color: '#ccc'}}>95% off</h3>
      </div>
    </div>
  );
};

export default Cart;