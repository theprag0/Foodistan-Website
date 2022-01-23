import offer from "../images/offer.png" ;
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from 'swiper';
import React, { Component } from "react";
import Slider from "react-slick";



// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style,marginRight:"5.6rem", display: "block",}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style,marginLeft:"5.6rem", display: "block", }}
//       onClick={onClick}
//     />
//   );
// }
var flag;
function WindowWidth(){
    
    const screenSize= window.innerWidth;
    return screenSize;     
}

export default class CenterMode extends Component {
  render() {
    
    if (WindowWidth() <= 600) {
      flag = 2;
  }else{
      flag = 4;
  } 
    // const settings = {
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "60px",
    //   slidesToShow: 2.5,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    // };

    return (
      
      <Swiper slidesPerView={`${flag}`} spaceBetween={10} pagination={{
        "clickable": true
        }} className="mySwiper container-fluid slider">
        <SwiperSlide>  <div className='' >
                        <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                      </div>
        </SwiperSlide>
        <SwiperSlide>  <div className='' >
                         <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                     </div>
                        </SwiperSlide>
        <SwiperSlide>  <div className='' >
                         <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                      </div></SwiperSlide>
        <SwiperSlide>  <div className='' >
                         <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                    </div></SwiperSlide>
        <SwiperSlide>  <div className='' >
                         <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                      </div></SwiperSlide>
        <SwiperSlide>  <div className='' >
                        <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                     </div></SwiperSlide>
        <SwiperSlide>  <div className='' >
                       <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                        </div></SwiperSlide>
        <SwiperSlide>  <div className='' >
                        <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                        </div></SwiperSlide>
        <SwiperSlide>  <div className='' >
                        <div>
                          <h3><img className="specialoffer-img" src={offer}alt="First slide"/></h3>
                       </div>
                        </div></SwiperSlide>
        </Swiper>


//      <div className="container-fluid bg-yellow slider"> 
//    <div className="container">
//      <Slider {...settings}>
      
//        <div>
//          <h3>   <img className="specialoffer-img"
//          src={offer}
//          alt="First slide"
//        /></h3>
//        </div>
//        <div>
//          <h3>   <img className="specialoffer-img"
//          src={offer}
//          alt="First slide"
//        /></h3>
//        </div>
//        <div>
//          <h3>   <img className="specialoffer-img"
//          src={offer}
//          alt="First slide"
//        /></h3>
//        </div>
//        <div>
//          <h3>   <img className="specialoffer-img"
//          src={offer}
//          alt="First slide"
//        /></h3>
//        </div>
//        <div>
//          <h3>   <img className="specialoffer-img"
//          src={offer}
//          alt="First slide"
//        /></h3>
//        </div>
//      </Slider>
//    </div>
//  );
// </div>
          // <div className='row'>
          // <div className='col-6 col-sm-3' >
          // <div className='nearby-food-card'>
          //     {/* <div className='nearby-food-card-img' ></div> */}
          //     <div className='nearby-food-card-details'>
          //         <div className='shop-name'>Shaman Chaat Corner</div> 
          //         <div className='shop-location'>GT, Karnal Road</div>
          //     </div>
          // </div>
          // </div>
//           <div className='col-6 col-sm-3'>   
//            <div className='nearby-food-card'>
//               {/* <div className='nearby-food-card-img' ></div> */}
//               <div className='nearby-food-card-details'>
//                   <div className='shop-name'>Shaman Chaat Corner</div>
//                   <div className='shop-location'>GT, Karnal Road</div>
//               </div>
//           </div></div>
//           <div className='col-6 col-sm-3 '>   
//            <div className='nearby-food-card'>
//               {/* <div className='nearby-food-card-img' ></div> */}
//               <div className='nearby-food-card-details'>
//                   <div className='shop-name'>Shaman Chaat Corner</div>
//                   <div className='shop-location'>GT, Karnal Road</div>
//               </div>
//           </div></div>
//           <div className='col-6 col-sm-3'>    
//           <div className='nearby-food-card'>
//               {/* <div className='nearby-food-card-img' ></div> */}
//               <div className='nearby-food-card-details'>
//                   <div className='shop-name'>Shaman Chaat Corner</div>
//                   <div className='shop-location'>GT, Karnal Road</div>
//               </div>
//           </div>
//       </div>
// </div>
   
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