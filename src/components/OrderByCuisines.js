import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import red from "../images/Group1.png";
import yellow from "../images/Group2.png";
import green from "../images/Group3.png";
import blue from "../images/Group4.png";

export default function OrderByCuisines () {
    return(<div>
        <Container fluid className="order-container main-container">
            <h2 className="big-font">Order By Cuisines</h2>
            <Row className="order-container"> 
                <Col xs={3} md={3}>
                <img className="cuisine-img mx-auto"src={red}></img>
                </Col>
                <Col xs={3} md={3}>
                <img className="cuisine-img" src={yellow}></img>
                </Col>
                <Col xs={3} md={3}>
                <img className="cuisine-img" src={green}></img>
                </Col>
                <Col xs={3} md={3}>
                <img className="cuisine-img" src={blue}></img>
                </Col>
            </Row>
        </Container>
    </div>)
};