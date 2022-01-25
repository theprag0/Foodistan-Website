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
              <Nav.Item className="header-items">
                <Link to="/about"className=''> About Us</Link>
              </Nav.Item>
              <Nav.Item className="header-items ">
                  <Link to="/Blogs" className=''>Blogs </Link>
              </Nav.Item>
              <Nav.Item className="header-items">
                <Link to="/become-our-patner" className=''>Become our patner</Link>
              </Nav.Item>
              <Nav.Item className="">
                  <Link to="/login" >
                    <Button
                      type="button"
                      variant="warning"
                      size="lg"
                      className='btn'
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
