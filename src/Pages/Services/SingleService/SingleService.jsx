import React from "react";
import { Image } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = ({ service }) => {
  // Destructure Service data
  const { _id, name, image, desc, price } = service;

  return (
    <div className="service-card position-relative">
      <div className="service-card-img position-relative">
        <PhotoProvider>
          <PhotoView src={image}>
            <Image className="img-fluid" src={image}></Image>
          </PhotoView>
        </PhotoProvider>
        <div className="price">
          <p>${price}</p>
        </div>
      </div>
      <div className="service-card-content">
        <h4>{name}</h4>
        <p>{desc.slice(0, 100)}...</p>
      </div>
      <div className="service-btn">
        <Link to={`/service/${_id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default SingleService;
