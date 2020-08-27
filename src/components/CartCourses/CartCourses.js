import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import './CartCourses.css'

const CartCourses = (props) => {
  const { id, title, price, headline, image_750x422 } = props.course;
  return (
    <div className="p-3">
      <div className="row">
        <div className="col-md-2">
          <img src={image_750x422} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-6">
          <h5 style={{fontSize: '16px'}}>{title}</h5>
          <h6 style={{fontSize: '13px'}}>{headline}</h6>
        </div>
        <div className="col-md-2 text-right">
          <h6 style={{fontSize: '14px', color: '#00adb5', cursor: 'pointer'}} onClick={() => props.removeCourse(id)}>Remove</h6>
          <h6 style={{fontSize: '14px', color: '#00adb5', cursor: 'pointer'}}>Save for Later</h6>
          <h6 style={{fontSize: '14px', color: '#00adb5', cursor: 'pointer'}}>Move to Wishlist</h6>
        </div>
        <div className="col-md-2">
          <h3 style={{fontSize: '13px'}}>${price.amount} <span style={{fontSize: '13px', color: 'gray'}}><FontAwesomeIcon icon={faTag} /></span></h3>
          <h6 style={{fontSize: '14px'}}><del>{price.list_price}</del></h6>
        </div>
      </div>
    </div>
  );
};

export default CartCourses;