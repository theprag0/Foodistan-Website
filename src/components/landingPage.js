import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Button } from 'react-bootstrap';
import Header from './common/header';
import SearchBar from './common/searchBar.js';
import Footer from './common/footer'
import "./css/landingPage.css";
import DiveInImg1 from "../images/DiveInImg1.png"
import DiveInImg2 from "../images/DiveInImg2.png"
import DiveInImg3 from "../images/DiveInImg3.png"
import DiveInImg4 from "../images/DiveInImg4.png"
import vendor1 from "./Images/vendor1.png"
import vendor2 from "./Images/vendor2.png"
import vendor3 from "./Images/vendor3.png"
import vendor4 from "./Images/vendor4.png"
import partner from "./Images/partner.png"
import Pvendorimg1 from "../images/vendorImg1.png"
import Pvendorimg2 from "../images/vendorImg2.png"
import Pvendorimg3 from "../images/vendorImg3.png"
import Pvendorimg4 from "../images/vendorImg4.png"
import mobile from "../components/Images/mobile.png";
// import nearbyShop from './Images/nearbyShop.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
  <Link to={'/explore'}></Link>;
};
var flag, flag2;
function WindowWidth() {
  const screenSize = window.innerWidth;
  return screenSize;
}

export default function LandingPage() {
  if (WindowWidth() <= 600) {
    flag = 1.7;
    flag2 = 1.7;
  } else {
    flag = 4;
    flag2 = 4;
  }

  return (
    <div>
    <div className="container-fluid">
      <div className="landingPage">
        <Header />
        {/* <div className='row outer-search-bar container-fluid'>
                    <div className='col-md-3 '></div>
                    <div className='col-md-6 search-bar'>
                        <div className='location-container'>
                            <div className='location-wrapper'>
                                <div className='location-icon-name'>
                                    <TiLocation className='absolute-center location-icon' />
                                    <div ><span className='home-text'>Home</span><br /> Rohini, Delhi</div>
                                </div>
                            </div>
                        </div>
                        <div className='input-search-bar absolute-center'>
                            <FiSearch className='search-icon' />
                            <input placeholder='Search Cuisines' className='search-input' />
                        </div>
                    </div>
                    <div className='col-md-3 '></div>
                </div> */}
               
                <div className='banner-text'><h1 className='title'>
                    <span className='title'></span>Not sure where to get the best taste of street style ?</h1>
                     <div className="explore-btn" >Perfect. We'll help you!</div>
                    <SearchBar />
                </div>

            </div>
          </div>

            {/* --------------------banner complete---------------------- */}

            <div className='container-fluid'>
                <div className='gray'>
                <div className='heading-text'>
                    Let's dive in
                </div>
                <div className=' container'>
                    <div className='row letsDiveIn-wrapper '>
                        <div className='col-md-3 col-6 padd-0 img-center'>
                            <img className=' order-online-img' src={DiveInImg1}></img>
                            <div className='diveIn-text  order-online'>
                                Order online
                            </div>
                        </div>
                        <div className=' col-md-3 col-6 padd-0 img-center'>
                            <img src={DiveInImg2}></img>
                            <div className='diveIn-text food-walk'>
                                Go for a food walk
                            </div>
                        </div>
                        <div className='col-md-3 col-6 padd-0 food-vendors img-center' >
                            <img src={DiveInImg3}></img>
                            <div className='diveIn-text'>
                                Hear from the food vendors
                            </div>
                        </div>
                        <div className='col-md-3 col-6 padd-0 img-center'>
                            <img src={DiveInImg4}></img>
                            <div className='diveIn-text add-something'>
                                Add something
                            </div>
                        </div>
                    </div>
                </div>
                </div>
              </div>
          
            <div className='container'>
                <div className='partner-wrapper'>
                    <div className='row'>
                        <div className='col-6 search'>
                            <div className='partner-banner-text'>Become Our Partner</div>
                            <div className='below-banner'>Become our partner in food.<br /> Start a new journey!</div>
                            <Button className="explore-btn-small">Learn More</Button>

                        </div>
                        <div className='col-6 search absolute-center'><img src={partner} className='partner-img' /></div>
                    </div>
                </div>
            </div>

            <div className='heading-text'>Popular Vendors</div>
            <div className='container popular-wrapper'>
                <div className='row'>
                    <div className='col-md-4 popular-vendors padd-0'>
                        <div><img className='popular-vendor-img'src={Pvendorimg4}></img></div>
                        <div className='popular-vendor-name'>
                            <span>Ram Ramesh Chandra</span>
                            <div className='popular-vendor-location'>Khana Khazana Corner <br/> kala bazarm chandni chowk</div>
                        </div>
                    </div>
                    <div className='col-md-4 popular-vendors  padd-0'>
                     <div><img className='popular-vendor-img' src={Pvendorimg1}></img></div>
                        <div className='popular-vendor-name'>
                            <span>Ram Ramesh Chandra</span>
                            <div className='popular-vendor-location'>Khana Khazana Corner <br/> kala bazarm chandni chowk</div>
                     </div>
                    </div>
                    <div className='col-md-4 popular-vendors padd-0'>
                    <div><img className='popular-vendor-img' src={Pvendorimg4}></img></div>
                        <div className='popular-vendor-name'>
                            <span>Ram Ramesh Chandra</span>
                            <div className='popular-vendor-location'>Khana Khazana Corner <br/> kala bazarm chandni chowk</div>
                    </div>
                    </div>
                    <div className='col-md-4 popular-vendors padd-0'>
                    <div><img className='popular-vendor-img' src={Pvendorimg1}></img></div>
                        <div className='popular-vendor-name'>
                            <span>Ram Ramesh Chandra</span>
                            <div className='popular-vendor-location'>Khana Khazana Corner <br/> kala bazarm chandni chowk</div>
                    </div>
                    </div>
                    <div className='col-md-4 popular-vendors padd-0'>
                    <div><img className='popular-vendor-img' src={Pvendorimg2}></img></div>
                        <div className='popular-vendor-name'>
                            <span>Ram Ramesh Chandra</span>
                            <div className='popular-vendor-location'>Khana Khazana Corner <br/> kala bazarm chandni chowk</div>
                    </div>
                    </div>
                    <div className='col-md-4 popular-vendors padd-0' >
                    <div><img className='popular-vendor-img'src={Pvendorimg3}></img></div>
                        <div className='popular-vendor-name'>
                            <span>Ram Ramesh Chandra</span>
                            <div className='popular-vendor-location'>Khana Khazana Corner <br/> kala bazarm chandni chowk</div>
                    </div>
                </div>
            </div>
         </div>
      



            <div className='container-fluid'>
                <div className='get-app'>
                    <div className='row get-app-left'>
                        <div className='col-7 search '>
                            <div className='get-app-banner'>Get Foodistaan <br />APP</div>
                            <div className='below-get-app'>Download the application from Playstore or Apple store to get exciting updates.</div>
                            <Button variant="success" className="explore-btn md-font">Download Now</Button>
                        </div>
                        <div className='col-5 search'>
                            <div className='mobile'><img className='mobile-img' src={mobile}></img></div>
                        </div>
                    </div>
                </div>

        <div className="heading-text">Listen From Vendors</div>
        <div className="vendors-wrapper">
          <Swiper
            slidesPerView={`${flag2}`}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src={vendor1} className="vendor-img" />

                <div className="vendor-name">Ram Ramesh Chandra</div>
                <p className="vendor-location">Khana Khaza corner</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor2} className="vendor-img" />

                <div className="vendor-name">Ram Ramesh Chandra</div>
                <span className="vendor-location">Khana Khaza corner</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor3} className="vendor-img" />

                <div className="vendor-name">Ram Ramesh Chandra</div>
                <span className="vendor-location">Khana Khaza corner</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor4} className="vendor-img" />
                <div className="vendor-name">Ram Ramesh Chandra</div>
                <span className="vendor-location">Khana Khaza corner</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor1} className="vendor-img" />

                <div className="vendor-name">Ram Ramesh Chandra</div>
                <p className="vendor-location">Khana Khaza corner</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor2} className="vendor-img" />

                <div className="vendor-name">Ram Ramesh Chandra</div>
                <span className="vendor-location">Khana Khaza corner</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor3} className="vendor-img" />

                <div className="vendor-name">Ram Ramesh Chandra</div>
                <span className="vendor-location">Khana Khaza corner</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={vendor4} className="vendor-img" />
                <div className="vendor-name">Ram Ramesh Chandra</div>
                <span className="vendor-location">Khana Khaza corner</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      <div className="container-fluid">
        <div className="partner-wrapper">
          <div className="row">
            <div className="col-6 search">
              <div className="partner-banner-text">Become Our Partner</div>
              <div className="below-banner">
                Become our partner in
                <br />
                food. Start a new
                <br />
                journey!
              </div>
              <Button variant="danger" className="explore-btn">
                Learn More
              </Button>
            </div>
            <div className="col-6 search">
              <img src={partner} className="partner-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="heading-text">Our Services</div>
      <div className="our-services-wrapper">
        <div className="services">
          <div className="vendors"></div>
          <div className="tiffin-service"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="get-app">
          <div className="row get-app-left">
            <div className="col-7 search ">
              <div className="get-app-banner">
                Get Foodistaan <br />
                APP
              </div>
              <div className="below-get-app">
                Download the application from Playstore or Apple store to get
                exciting updates.
              </div>
              <Button variant="success" className="explore-btn md-font">
                Download Now
              </Button>
            </div>
            <div className="col-5 search">
              <div className="mobile">
                <img className="mobile-img" src={mobile}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
  );

}
