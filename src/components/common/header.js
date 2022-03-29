import React, { useContext } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

function Header() {
  const location = useLocation();
  const authCtx = useContext(AuthContext);
  
  return (
    <div>
      <Navbar expand="sm" className={`navbar ${location.pathname === '/' || location.pathname === '/about' ? '' : 'bg-dark'}`}>
        <Container>
          <Navbar.Brand className="navbar-brand">
            <NavLink to="/" className="navlink-logo">
              <img src={logo} alt="logo" className="logo"></img>
              Streato
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Item className="header-items ">
                <NavLink to="/explore" className="" activeClassName="selected">
                  Explore{' '}
                </NavLink>
              </Nav.Item>
              <Nav.Item className="header-items">
                <NavLink activeClassName="selected" to="/about" className="">
                  {' '}
                  About Us
                </NavLink>
              </Nav.Item>
              <Nav.Item className="header-items ">
                <NavLink to="/Blogs" className="" activeClassName="selected">
                  Blogs
                </NavLink>
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
