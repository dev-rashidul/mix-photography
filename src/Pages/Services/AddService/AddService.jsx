import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import swal from 'sweetalert';
import "./AddService.css";


const AddService = () => {

  
  // Get Current time
  const date = new Date();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


  // Add Service Function
  const serviceHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const desc = form.desc.value;

    const service = {
        name,
        image,
        price,
        desc, time
    }

    
    fetch("https://mix-photography-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Good job!", "Service Added Successfully", "success");
          form.reset();
        }
      })
      .catch((error) => console.error(error));

  };

  return (
    <>
      <Helmet>
        <title> Photography - Add Service</title>
      </Helmet>
      <div className="add-service">
        <h3>Add Service</h3>
        <Container>
          <form onSubmit={serviceHandler}>
            <FloatingLabel
              controlId="floatingInput"
              label="Service Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingEmail"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="price"
                placeholder="Price"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPhoto"
              label="Image Link"
              className="mb-3"
            >
              <Form.Control type="text" name="image" placeholder="Image Link" required />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Service Desc">
              <Form.Control
                as="textarea"
                rows={3}
                name="desc"
                placeholder="Your message"
                required
              />
            </FloatingLabel>
            <Button className="submit-btn" type="submit">
              Add Service
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default AddService;
