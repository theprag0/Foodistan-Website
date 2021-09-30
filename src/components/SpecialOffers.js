import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import offer from "../images/offer.png" ;

export default function SpecialOffers(){
    return(
        <div><Container fluid >
                <Carousel indicators={false} className="carousel ">
        <Carousel.Item interval={1000000}>
        <Row className="mx-auto">
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
           />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
        <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} xs={6}>
           <img
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
        </Carousel.Item>
      </Carousel>
            </Container></div>
    )
};