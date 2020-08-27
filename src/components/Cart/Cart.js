import React from 'react';
import CartCourse from '../CartCourses/CartCourses';
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  const discountPrice = cart.reduce((total, course) => total + course.price.amount ,0);
  const totalPrice = cart.reduce((total, course) => total + course.price.list_price, 0);
  return (
    <div className="row mb-5">
      <div className="col-md-9">
        <h5 style={{color: '#ccc'}}>{cart.length} Courses in Cart</h5>
        {
          cart.map(course => <CartCourse key={course.id} course={course} removeCourse={props.removeCourse}></CartCourse>)
        }
      </div>
      <div className="col-md-3">
        <h3 style={{ color: '#ccc' }}>Total:</h3>
        <h2>${discountPrice.toFixed(2)}</h2>
        <h3 style={{color: '#ccc'}}><del>${totalPrice.toFixed(2)}</del></h3>
        <h3 style={{color: '#ccc'}}>95% off</h3>
        <button className="d-block w-100 btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;