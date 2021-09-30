import { Navbar, Container, Button, Nav, Row, Col, Form, FormControl, Badge } from "react-bootstrap";
import React from "react";
import logo from "../../images/logo.jpg";
import pin from "../../images/pin.png"
import foodTrolley from "../../images/food-trolley.svg";
import tiffin from "../../images/tiffin.svg";


function Header(){
    return(
        <div>   <Navbar bg="white" expand="sm"  className="navbar">
        <Container >
          <Navbar.Brand className="navbar-brand " href="#home"><img src={logo} className="logo"></img></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Item className="mx-4"><Nav.Link><a href="#login">About Us</a></Nav.Link></Nav.Item>
              <Nav.Item className="mx-4"><Nav.Link><a href="#login">Blogs</a></Nav.Link></Nav.Item>
              <Nav.Item className="mx-4"><Nav.Link><a href="#login">Become our patner</a></Nav.Link></Nav.Item>
              <Nav.Item className="mx-4"><Nav.Link><Button type="button"className="btn"variant="warning" size="lg">Login/Sign Up</Button>{' '}</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="search-bar">
        <Row>
          <Col xs={1}></Col>
          <Col xs={1}>
            <div className="location">
             <h3> <Badge bg="light"><img width="20px" height="20px" src={pin}/></Badge><span style={{"font-weight":'bold'}, {"font-size":'2.5rem'}}>Home </span><br /><span style={{"font-size":'2.5rem'}}>Rohini,India</span></h3>
            </div>
          </Col>
          <Col xs={8}>
          <div>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 search"
              aria-label="Search"
              size="lg"
           />
           </Form>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
    )

    
}
export default Header;