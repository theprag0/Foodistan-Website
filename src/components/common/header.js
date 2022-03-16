import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

function Header() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Navbar expand="sm" className="navbar">
        <Container>
          <Navbar.Brand className="navbar-brand ">
            <NavLink to="/" className="navlink-logo">
              <img src={logo} alt="logo" className="logo"></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Item className="header-items ">
                <Link to="/explore" className="">
                  Explore{' '}
                </Link>
              </Nav.Item>
              <Nav.Item className="header-items">
                <Link to="/about" className="">
                  {' '}
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item className="header-items ">
                <Link to="/Blogs" className="">
                  Blogs{' '}
                </Link>
              </Nav.Item>
              <Nav.Item className="header-items">
                <Link to="/become-our-patner" className="">
                  Become our patner
                </Link>
              </Nav.Item>
              {!authCtx.isLoggedIn && (
                <Nav.Item className="">
                  <Link to="/login">
                    <Button
                      type="button"
                      variant="warning"
                      size="lg"
                      className="btnn"
                    >
                      Login/Sign Up
                    </Button>
                  </Link>{' '}
                </Nav.Item>
              )}
              {authCtx.isLoggedIn && (
                <Nav.Item className="">
                  <Button
                    type="button"
                    variant="warning"
                    size="lg"
                    className="btnn"
                    onClick={authCtx.logout}
                  >
                    Logout
                  </Button>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
