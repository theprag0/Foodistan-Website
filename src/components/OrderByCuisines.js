import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from 'swiper';
import Slider from "react-slick";
import red from "../images/Group1.png";
import yellow from "../images/Group2.png";
import green from "../images/Group3.png";
import blue from "../images/Group4.png";

var flag;
function WindowWidth(){
    
    const screenSize= window.innerWidth;
    return screenSize;     
}
     export default class CenterMode extends Component {
  render() {

    if (WindowWidth() <= 600) {
      flag = 3.5;
  }else{
      flag = 5;
  } 

    return (
      <div style={{width: '100%', backgroundColor: 'rgb(248, 248, 248)', padding: '10px 0'}}> 
        <Container className="container-fluid">
          <Row className="row absolute-center justify-content-start">
            <Col className="col-md-6">
              <h2 className="cuisines-header">Order By Cuisines</h2>
            </Col>
            <Col className="col-md-6"></Col>
          </Row>
          <Row className="row my-3 mx-4 absolute-center ">
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={red} alt="First slide"/>
            </Col>
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={yellow} alt="First slide"/>
            </Col>
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={green} alt="First slide"/>
            </Col>
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={blue} alt="First slide"/>
            </Col>
          </Row>
          <Row className="row my-3 mx-4 absolute-center">
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={blue} alt="First slide"/>
            </Col>
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={red} alt="First slide"/>
            </Col>
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={yellow} alt="First slide"/>
            </Col>
            <Col className="col-md-2 col-sm-2 col-xs-6">
              <img className="cuisine-img img-fluid" src={green} alt="First slide"/>
            </Col>
          </Row>
        </Container>
      </div>
    )};
    }


    // <Swiper slidesPerView={`${flag}`} spaceBetween={5} pagination={{
    //   "clickable": true
    //   }} className="mySwiper container-fluid slider" navigation={true}>
    //   <SwiperSlide>  <div className='absolute-center' >
    //                    <div>
    //                     <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
    //                    </div>
    //                  </div>
    //   </SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center' >
    //                    <div>
    //                     <h3><img className="cuisine-img"src={yellow}alt="First slide"/></h3>
    //                    </div>
    //                  </div>
    //                   </SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center' >
    //                    <div>
    //                     <h3><img className="cuisine-img"src={green}alt="First slide"/></h3>
    //                    </div>
    //                  </div>
    //                 </SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center' >
    //                    <div>
    //                     <h3><img className="cuisine-img"src={blue}alt="First slide"/></h3>
    //                    </div>
    //                  </div></SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center' >
    //                    <div>
    //                     <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
    //                    </div>
    //                  </div></SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center' >
    //                    <div>
    //                     <h3><img className="cuisine-img"src={yellow}alt="First slide"/></h3>
    //                    </div>
    //                  </div></SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center'>
    //                    <div>
    //                     <h3><img className="cuisine-img"src={green}alt="First slide"/></h3>
    //                    </div>
    //                  </div></SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center'>
    //                    <div>
    //                     <h3><img className="cuisine-img"src={blue}alt="First slide"/></h3>
    //                    </div>
    //                  </div></SwiperSlide>
    //   <SwiperSlide>  <div className='absolute-center'>
    //                    <div>
    //                     <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
    //                    </div>
    //                  </div></SwiperSlide>
    //   </Swiper>   