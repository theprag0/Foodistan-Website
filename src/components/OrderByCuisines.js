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
      <div className="specialOffer-slider2 slider-gray-bg"> 
      <div className="container">
        <h2 className="big-font">Order By Cuisines</h2>
         <Swiper slidesPerView={`${flag}`} spaceBetween={5} pagination={{
        "clickable": true
        }} className="mySwiper container-fluid slider">
        <SwiperSlide>  <div className='absolute-center' >
                         <div>
                          <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
                         </div>
                       </div>
        </SwiperSlide>
        <SwiperSlide>  <div className='absolute-center' >
                         <div>
                          <h3><img className="cuisine-img"src={yellow}alt="First slide"/></h3>
                         </div>
                       </div>
                        </SwiperSlide>
        <SwiperSlide>  <div className='absolute-center' >
                         <div>
                          <h3><img className="cuisine-img"src={green}alt="First slide"/></h3>
                         </div>
                       </div>
                      </SwiperSlide>
        <SwiperSlide>  <div className='absolute-center' >
                         <div>
                          <h3><img className="cuisine-img"src={blue}alt="First slide"/></h3>
                         </div>
                       </div></SwiperSlide>
        <SwiperSlide>  <div className='absolute-center' >
                         <div>
                          <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
                         </div>
                       </div></SwiperSlide>
        <SwiperSlide>  <div className='absolute-center' >
                         <div>
                          <h3><img className="cuisine-img"src={yellow}alt="First slide"/></h3>
                         </div>
                       </div></SwiperSlide>
        <SwiperSlide>  <div className='absolute-center'>
                         <div>
                          <h3><img className="cuisine-img"src={green}alt="First slide"/></h3>
                         </div>
                       </div></SwiperSlide>
        <SwiperSlide>  <div className='absolute-center'>
                         <div>
                          <h3><img className="cuisine-img"src={blue}alt="First slide"/></h3>
                         </div>
                       </div></SwiperSlide>
        <SwiperSlide>  <div className='absolute-center'>
                         <div>
                          <h3><img className="cuisine-img"src={red}alt="First slide"/></h3>
                         </div>
                       </div></SwiperSlide>
        </Swiper>
        </div>
        </div>
    )};
    }

//    <div className="container order-container">
//    <h2 className="big-font">Order By Cuisines</h2>
//      <Slider {...settings}>
      //  <div>
      //    <h3><img className="cuisine-img"
      //    src={red}
      //    alt="First slide"
      //  /></h3>
      //  </div>
//        <div>
//          <h3>   <img className="cuisine-img"
//          src={yellow}
//          alt="First slide"
//        /></h3>
//        </div>
//        <div>
//          <h3>   <img className="cuisine-img"
//          src={green}
//          alt="First slide"
//        /></h3>
//        </div>
//        <div>
//          <h3>   <img className="cuisine-img"
//          src={blue}
//          alt="First slide"
//        /></h3>
//        </div>
//      </Slider>
//    </div>
//  );

   
     
   
// }
// }
    