import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import logo from "../../images/camera.png";
import "./Header.css";

const Header = () => {
  // Get User using Context
  const { user, logOut } = useContext(AuthContext);

  // Log Out Function
  const handleLogout = () => {
    logOut()
      .then((result) => console.log("Log Out Successfull"))
      .catch((error) => console.error(error));
  };

  return (
    <header>
      <Navbar className="header" expand="xl">
        <Container fluid>
          <Link className="logo" to="/">
            <Image src={logo}></Image> Mix Photography
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/add-service">Add Service</Link>
                  </li>
                  <li>
                    <Link to="/my-reviews">My Reviews</Link>
                  </li>
                  <li className="mt-1 mt-lg-0">
                    <Image className="userImage" src={user?.photoURL}></Image>
                    <Link className="username">{user?.displayName}</Link>
                  </li>
                  <li className="mt-3 mt-lg-0">
                    <Link className="logout" onClick={handleLogout}>
                      LogOut
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="mt-2 mt-lg-0">
                    <Link className="login" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="mt-3 mt-lg-0">
                    <Link className="login" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
