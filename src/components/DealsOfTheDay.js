import React from "react";
import deal from "../images/Deal.png";
import { Col, Container, Row } from "react-bootstrap";

export default function Deals(){
    return(
        <div>
            <Container>
                <h2 className="Deals">Deals Of The Day</h2>
            <Row>
                {/* <Col></Col> */}
                <Col md={4}>
                <img className="deal-img" src={deal}></img>
                </Col>
                <Col md={4}>
                <img className="deal-img" src={deal}></img>
                </Col>
                <Col md={4}>
                <img className="deal-img" src={deal}></img>
                </Col>
                {/* <Col></Col> */}
            </Row>
            </Container>
        </div>
    )
};