import { Carousel, Col, Container, Row } from "react-bootstrap";
import offer from "../images/offer.png" ;
import React, { Component } from "react";
import Slider from "react-slick";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,marginRight:"5.6rem", display: "block",}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,marginLeft:"5.6rem", display: "block", }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2.5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
     <div className="container-fluid bg-yellow slider"> 
   <div className="container">
     <Slider {...settings}>
       <div>
         <h3><img className="specialoffer-img"
         src={offer}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="specialoffer-img"
         src={offer}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="specialoffer-img"
         src={offer}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="specialoffer-img"
         src={offer}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="specialoffer-img"
         src={offer}
         alt="First slide"
       /></h3>
       </div>
       <div>
         <h3>   <img className="specialoffer-img"
         src={offer}
         alt="First slide"
       /></h3>
       </div>
     </Slider>
   </div>
 );
</div>
   
                /* <Carousel indicators={false} className="carousel ">
        <Carousel.Item interval={1000000}>
        <Row className="mx-auto">
           <Col  sm={4} className="center" >
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={4} className="hide">
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col  sm={4} className="hide">
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
           <Col sm={4} className="center" >
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
           />
           </Col>
           <Col sm={4} className="hide">
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={4} className="hide" >
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
        <Col sm={3} className="center">
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3}  className="hide">
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
           <Col sm={3} className="hide" >
           <img className="specialoffer-img"
            src={offer}
            alt="First slide"
          />
           </Col>
        </Row>
        </Carousel.Item>
      </Carousel> */
    )
  }
}