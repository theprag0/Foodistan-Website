import {
  Navbar,
  Container,
  Button,
  Nav,
  Row,
  Col,
  Form,
  FormControl,
  Badge,
} from 'react-bootstrap';
import React from 'react';
import logo from '../../images/logo.jpg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      {' '}
      <Navbar bg="white" expand="sm" className="navbar">
        <Container>
          <Navbar.Brand className="navbar-brand ">
            <NavLink to="/" className="navlink-logo">
              <img src={logo} alt="logo" className="logo"></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Item className="mx-4">
                <a href="#login">About Us</a>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Link to="/Blogs">Blogs </Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Link to="/explore">Explore</Link>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <a href="#login">Become our patner</a>
              </Nav.Item>
              <Nav.Item className="mx-4">
                <Link to="/login">
                  <Button
                    type="button"
                    className="btn"
                    variant="warning"
                    size="lg"
                  >
                    Login/Sign Up
                  </Button>
                </Link>{' '}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
