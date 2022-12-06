import React, { useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Services.css";
import SingleService from "./SingleService/SingleService";

const Services = () => {

  // Get Loading state from context
  const {loading} = useContext(AuthContext)

  // Load Services data using useLoader
  const services = useLoaderData();
  
  if(loading){
    return <Spinner style={{margin : "100px 100px 0"}} animation="border" variant="danger" />
  }

  return (
    <>
      <Helmet>
        <title> Photography - Services</title>
      </Helmet>
      <div className="services">
        <h2>Services</h2>
        <p className="text-center">
          Here is my Photography Services package. Choose which one is your
          need.
        </p>
        <Container>
          <div className="services-container">
            {services.map((service) => (
              <SingleService
                key={service._id}
                service={service}
              ></SingleService>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
