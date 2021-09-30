import React from "react";
import deal from "../images/Deal.png";
import vector from "../images/Vector.png";
import { Col, Container, Row ,Button} from "react-bootstrap";

export default function Deals(){
    return(
        <div>
            <h2 className="big-font">Deals Of The Day</h2>
            <Container fluid className="deal-container ">
            <Row>
                <Col></Col>
                <Col md={3} xs={5}>
                <div className="deal-img" style={{background: `url(${deal})center center`}} >
                    <div className="deal-img-discount"style={{background: `url(${vector})no-repeat center center` ,"background-size":'cover'}}>
                       <strong> 30% off</strong>
                    </div>
                </div>
                </Col>
                
                <Col md={3} xs={5}>
                <div className="deal-img" style={{background: `url(${deal}) center center`}} >
                <div className="deal-img-discount"style={{background: `url(${vector})no-repeat center center` ,"background-size":'cover'}}>
                       <strong> 30% off</strong>
                    </div>
                </div>
                </Col>
               
                <Col md={3} xs={6} className="hide">
                <div className="deal-img" style={{background: `url(${deal}) center center`}} >
                <div className="deal-img-discount"style={{background: `url(${vector})no-repeat center center` ,"background-size":'cover'}}>
                       <strong> 30% off</strong>
                    </div>
                </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col sm={11}></Col>
                <Col sm={1}> <Button variant="outline-warning" className="viewMore-btn md-font">View More...</Button></Col>
            </Row>
            </Container>
            
        
      </div>
    )
};