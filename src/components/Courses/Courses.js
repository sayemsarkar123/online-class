import React, { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/fakeData';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState(fakeData);
  const [cart, setCart] = useState([]);
  const addCart = (course) => setCart([...cart, course]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {
            cart.length ? <Cart cart={cart}></Cart> : null
          }
        </div>
        <div className="col-md-12">
          {courses.map((course) => (
            <Course key={course.id} course={course} addCart={addCart}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
