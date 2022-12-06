import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import aboutImg from "../../images/about.png";
import image from "../../images/hero.png";
import SingleService from "../Services/SingleService/SingleService";
import "./Home.css";
import Portfolio from "./Portfolio/Portfolio";


// Image object for Portfolio
const images = [
  {
    img : "https://i.ibb.co/CWDc5pB/wild.jpg",
    id :1
  },
  {
    img : "https://i.ibb.co/42sbTfz/wed.jpg",
    id :2
  },
  {
    img : "https://i.ibb.co/m57xJjv/editorial.jpg",
    id :3
  },
  {
    img : "https://i.ibb.co/ZSNcF5G/fashion2.jpg",
    id :4
  },
  {
    img : "https://i.ibb.co/hCpB8s4/food2.jpg",
    id :5
  },
  {
    img : "https://i.ibb.co/cgr74JP/realestate.jpg",
    id :6
  },
]


const Home = () => {
  // Get Home Services using useLoaderData
  const services = useLoaderData();

  return (
    <>
      <Helmet>
        <title> Photography - Home</title>
      </Helmet>
      {/* Hero Section JSX Start */}

      <section id="Hero">
        <div className="hero-wrapper">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="hero-content">
                  <h2>
                    Welcome to, <br /> <span>Mix Photography</span>
                  </h2>
                  <p>
                    Hi, this is Mix Photography a complete Photography Service
                    for different category. Her you will get world-class
                    photogrph.
                  </p>
                  <Link to="/services">Get Started</Link>
                </div>
              </Col>
              <Col lg={6} className="mt-5 mt-lg-0">
                <div className="hero-img mt-5 mt-lg-0">
                  <Image className="img-fluid" src={image}></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Hero Section JSX End */}

      {/* Service Section JSX Start */}

      <section className="services pt-0">
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
        <div className="see-all-btn mt-5 pt-4 text-center">
          <Link to="/services" className="">
            See All
          </Link>
        </div>
      </section>

      {/* Service Section JSX End */}

      {/* About Section JSX Start */}

      <section className="about">
        <div className="text-center py-4">
          <h2>About Me</h2>
          <p>Know more about me</p>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="about-content pe-xl-5">
                <h3>Rashidul Islam</h3>
                <h6>Photographer</h6>
                <p>
                  This is Rashidul Islam a professional Photographer with 5
                  years of real time experience who is working for any types of
                  photography services like : Fashion Photography, Wedding,
                  Sports, Food, Nature, Landscape etc. You can choose my
                  services undoubtedly because I always ensure 100% of quality
                  service. Click on Read more button to know more about me.
                </p>
                <Link>Read More</Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-img mt-5 mt-md-0">
                <Image className="img-fluid" src={aboutImg}></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section JSX End */}

      {/* Portfolio Section JSX Start */}

      <section className="portfolio">
        <div className="text-center">
          <h2>Portfolio</h2>
          <p>See some of my latest work</p>
        </div>
        <Container>
          <div className="porfolio-items py-5 mb-5">
              {
                images.map(img => <Portfolio className="img-fluid" key={img.id} portfolio={img}></Portfolio>)
              }
          </div>
        </Container>
      </section>

      {/* Portfolio Section JSX End */}
    </>
  );
};

export default Home;
