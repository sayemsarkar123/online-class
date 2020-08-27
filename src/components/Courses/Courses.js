import React, { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/fakeData';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState(fakeData);
  const [cart, setCart] = useState([]);
  const addCart = addCourse => {
    const cartCourses = [...cart, addCourse];
    const filterCourses = [];
    cartCourses.forEach(course => filterCourses.indexOf(course) < 0 ? filterCourses.push(course) : null);
    setCart(filterCourses);
  };
  const removeCourse = id => {
    const filterCourses = cart.filter(course => course.id !== id);
    setCart(filterCourses);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {
            cart.length ? <Cart cart={cart} removeCourse={removeCourse}></Cart> : null
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
