import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/camera.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col md={6} lg={5}>
              <div className="footer-logo">
                <Image src={logo}></Image>
                <p className="me-lg-5">
                  Mix Photography a complete Photography Service for different
                  category. Her you will get world-class photo.
                </p>
                <div className="footer-social">
                  <Link ro="/">
                    <FaFacebook></FaFacebook>
                  </Link>
                  <Link ro="/">
                    <FaInstagram></FaInstagram>
                  </Link>
                  <Link ro="/">
                    <FaTwitter></FaTwitter>
                  </Link>
                  <Link ro="/">
                    <FaLinkedinIn></FaLinkedinIn>
                  </Link>
                  <Link ro="/">
                    <FaGithub></FaGithub>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mt-5 mt-lg-0">
              <div className="important-links">
                <h3>Important Links</h3>
                <div className="links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add-service">Add Service</Link>
                  </li>
                  <li>
                    <Link to="/my-review">My Reviews</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="mt-5 mt-lg-0">
              <div className="newsletter">
                <h3>Newsletter</h3>
                <p>Subscribe for latest news, all updates or offers.</p>
                <div className="newsletter-form d-flex">
                  <input type="text" placeholder="Email Address" />
                  <input type="submit" value="Subscribe" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright">
        <p>&copy; Copyright 2022 | Rashidul Islam | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
