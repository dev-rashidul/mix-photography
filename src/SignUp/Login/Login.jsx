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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  // Get Login Firebase auth using context
  const {userLogin, googleLogin } = useContext(AuthContext);

  // Navigate and Location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const googleLoginHandler = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // JWT Token

        const currentUser = {
          email: user.email,
        };

        fetch(`https://mix-photography-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // Set JWT in LocalStorage
            localStorage.setItem("photography-token", data.token);
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Login Function
  const loginHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;

        // JWT Token

        const currentUser = {
          email: user.email,
        };

        fetch(`https://mix-photography-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // Set JWT in LocalStorage
            localStorage.setItem("photography-token", data.token);
            form.reset();
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Helmet>
        <title> Photography - Login</title>
      </Helmet>
      <div className="register">
        <div className="register-form">
          <h3>Login Here</h3>
          <Container>
            <form onSubmit={loginHandler}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Enter Password"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </FloatingLabel>
              <Button className="submit-btn" type="submit">
                Login
              </Button>
              <Button onClick={googleLoginHandler} className="google-btn">
                Login with Google <FaGoogle></FaGoogle>
              </Button>
              <p>
                New in Mix Photography?{" "}
                <Link to="/register">Register here</Link>
              </p>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
