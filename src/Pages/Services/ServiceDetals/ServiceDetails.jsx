import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Reviews from "../Reviews/Reviews";
import "./ServiceDetails.css";


const ServiceDetails = () => {
  // Reviews State
  const [reviews, setReviews] = useState([]);

  // Get User info using useContext
  const { user } = useContext(AuthContext);

  // Get Data using useLoader
  const serviceDetails = useLoaderData();
  const { _id, name, image, desc, price } = serviceDetails;

  // Get Current time
  const date = new Date();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  // Add review function
  const handleReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const message = form.message.value;

    const review = {
      service_id: _id,
      service_name: name,
      user_name: user?.displayName,
      user_image: user?.photoURL,
      user_email: user?.email,
      user_review: message,
      time: time,
    };

    fetch("https://mix-photography-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Good job!", "Review Added Successfully", "success");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  // Get Specific Service review
  useEffect(() => {
    fetch(`https://mix-photography-server.vercel.app/reviews?service_id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, [_id, reviews]);

  return (
    <>
      <Helmet>
        <title> Photography - Service Details</title>
      </Helmet>
      <div className="service-details">
        <h3>{name} Details</h3>
        <div className="service-details-card position-relative">
          <div className="service-details-card-img position-relative">
            <Image className="img-fluid" src={image}></Image>
            <div className="price">
              <p>${price}</p>
            </div>
          </div>
          <div className="service-details-card-content">
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
          <div className="service-btn">
            <Link to={`/service/${_id}`}>View Details</Link>
          </div>
        </div>
        <div className="add-review">
          <h4>Add Review</h4>
          {user?.email ? (
            <>
              <form onSubmit={handleReview}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Your message"
                    required
                  />
                </Form.Group>
                <Button type="submit">Add Review</Button>
              </form>
            </>
          ) : (
            <p>
              To add review first you have to login
              <Link to="/login">Login Here</Link>
            </p>
          )}
        </div>
        <div className="show-review">
          <h3>All Reviews</h3>
          {reviews
            .sort(function (a, b) {
              return a.time < b.time ? 1 : -1;
            })
            .map((review) => (
              <Reviews key={review._id} review={review}></Reviews>
            ))}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
