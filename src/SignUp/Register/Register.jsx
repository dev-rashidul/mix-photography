import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
  // Get Register Firebase auth using Context
  const {  createUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const googleLoginHandler = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Register Function
  const registerHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUserUpdateProfile(name, photo);
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  // Update User Profile
  const handleUserUpdateProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile);
  };

  return (
    <>
      <Helmet>
        <title> Photography - Register</title>
      </Helmet>
      <div className="register">
        <div className="register-form">
          <h3>Register Here</h3>
          <Container>
            <form onSubmit={registerHandler}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Name"
                className="mb-3"
              >
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Enter Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email" required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPhoto"
                label="Photo URL"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="photo"
                  placeholder="Photo URL" required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Enter Password"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password" required
                />
              </FloatingLabel>
              <Button className="submit-btn" type="submit">
                Register
              </Button>
              <Button onClick={googleLoginHandler} className="google-btn">
                Register with Google <FaGoogle></FaGoogle>
              </Button>
              <p>
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Register;
