import React from "react";
import { Navbar, Container, Button, Nav, Row, Col, Form, FormControl, Badge } from "react-bootstrap";
import pin from "../../images/pin.png";

export default function searchBar(){
    return(
        <div>    
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
      </Container></div>
    )
};