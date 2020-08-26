import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
  const { title, price, visible_instructors, headline, num_subscribers, rating, num_published_lectures,  image_750x422, instructional_level, content_info } = props.course;
  return (
    <div style={{borderBottom: '1px solid #ccc'}} className="py-4">
      <div className="row">
        <div className="col-md-3">
          <img src={image_750x422} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-7">
          <h5>{title}</h5>
          <h6>{headline}</h6>
          <p><span>{visible_instructors[0].display_name}</span></p>
          <p>{rating.toFixed(1)} <span style={{color: '#EB8A2F'}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalf} /></span> ({num_subscribers})</p>
          <p>{`${content_info} . ${num_published_lectures} lectures . ${instructional_level}`}</p>
        </div>
        <div className="col-md-2 d-flex flex-column text-right">
          <h3>${price.amount}</h3>
          <h6><del>{price.list_price}</del></h6>
          <button className="btn btn-success mt-auto" onClick={() => props.addCart(props.course)}>Enroll now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;