import React from "react";
import { Image } from "react-bootstrap";
import "./Reviews.css";

const Reviews = ({ review }) => {
  const { user_name, user_image, user_review, service_name, time } = review;

  return (
    <div className="reviews">
      <div className="review-card d-flex justify-content-between">
        <div className="user-review-info">
          <div className="d-flex align-items-center pb-2">
            <Image src={user_image}></Image>
            <div>
              <h4>{user_name}</h4>
              <span className="ps-2">{time}</span>
            </div>
          </div>
          <h5>{service_name}</h5>
          <p>{user_review}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
