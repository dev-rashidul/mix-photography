import React, { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const SingleReview = ({ review, handleDelete }) => {
  const { _id, user_name, user_image, user_review, service_name, time } =
    review;

  // State for Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Get Current time
  const date = new Date();
  const newTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  // Update Handler Function
  const updateHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const message = form.message.value;

    const updateReview = {
      user_review: message,
      time: newTime,
    };

    fetch(`https://mix-photography-server.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal("Good job!", "Review Updated Successfully", "success");
        }
      })
      .catch((error) => console.error(error));
  };

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
        <div className="d-flex align-items-start">
          <Link onClick={handleShow} className="edit-btn">
            <FaEdit></FaEdit>
          </Link>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={updateHandler}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    defaultValue={user_review}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>
                <Button onClick={handleClose} type="submit" variant="success">Update Review</Button>
              </form>
            </Modal.Body>
          </Modal>
          <Link onClick={() => handleDelete(_id)} className="delete-btn">
            <FaTrashAlt></FaTrashAlt>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
