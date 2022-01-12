import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import red from "../images/Group1.png";
import yellow from "../images/Group2.png";
import green from "../images/Group3.png";
import blue from "../images/Group4.png";

     
     export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3.5,

    };

    return (

   <div className="container order-container">
   <h2 className="big-font">Order By Cuisines</h2>
     <Slider {...settings}>
       <div>
         <h3><img className="cuisine-img"
         src={red}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="cuisine-img"
         src={yellow}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="cuisine-img"
         src={green}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="cuisine-img"
         src={blue}
         alt="First slide"
       /></h3>
       </div>
     </Slider>
   </div>
 );

   
     
   
}
}
     
     
     
     
     
     
     
        {/* <Container fluid className=" main-container ">
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
        </Container> */}
