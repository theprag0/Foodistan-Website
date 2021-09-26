import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import offer from "../images/offer.png" ;

export default function SpecialOffers(){
    return(
        <div><Container>
                <Carousel className="carousel">
        <Carousel.Item>
        <Row>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            </Container></div>
    )
};