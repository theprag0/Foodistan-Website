import React, {useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from 'swiper';
import "swiper/swiper-bundle.css";
import { Button } from 'react-bootstrap';
import Header from './common/header' 
import Footer from './common/footer'
import {TiLocation} from "react-icons/ti"
import {FiSearch} from "react-icons/fi"
import "./css/landingPage.css";
import vendor1 from "./Images/vendor1.png"
import vendor2 from "./Images/vendor2.png"
import vendor3 from "./Images/vendor3.png"
import vendor4 from "./Images/vendor4.png"
import partner from "./Images/partner.png"
import nearbyFoodImgBurger from "./Images/nearbyFoodImgBurger.png"
import nearbyFoodImgFries from "./Images/nearbyFoodImgFries.png"
import mobile from "../components/Images/mobile.png";
// import nearbyShop from './Images/nearbyShop.png'
import { Link } from 'react-router-dom';

const HomePage = ()=>{
    <Link to={"/explore"}></Link>
}
var flag,flag2;
function WindowWidth(){
    
    const screenSize= window.innerWidth;
    return screenSize;     
}

export default function LandingPage(){

    if (WindowWidth() <= 600) {
        flag = 1.7;
        flag2 = 1.7
    }else{
        flag = 4;
        flag2 = 4
    } 

    return(
    <div className='container-fluid'>
        <div className='landingPage'>
        <Header/>
    <div className='row outer-search-bar container-fluid'>
        <div className='col-md-3 '></div>
        <div className='col-md-6 search-bar'>
            <div className='location-container'>
                <div className='location-wrapper'>
                <div className='location-icon-name'>
                    <TiLocation className='absolute-center location-icon'/>
                    <div ><span className='home-text'>Home</span><br/> Rohini, Delhi</div>
                </div>
            </div>
        </div>
                <div className='input-search-bar absolute-center'>
                   <FiSearch className='search-icon'/>
                   <input placeholder='Search Cuisines' className='search-input'/>
                </div>
     </div>
    <div className='col-md-3 '></div>
        </div>
            <div className='banner-text'><h1 className='title'>
               <span className='title'></span>Not sure where to get the best taste of street style ?</h1>
                <Link to={"/explore"}><Button variant="warning" className="explore-btn" >Perfect. We'll help you! </Button></Link>
            </div>
            
        </div>

            {/* --------------------banner complete---------------------- */}

            <div className='container-fluid'>
            <div className='heading-text'>
                            Explore Nearby Food
                    </div>
                <div className='explore-nearby-wrapper'>
                    <Swiper slidesPerView={`${flag}`} spaceBetween={10} pagination={{
                    "clickable": true
                    }} className="mySwiper">
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgBurger' src={nearbyFoodImgBurger}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>BURGER BOMB</div> 
                                        </div>
                                     </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgFries' src={nearbyFoodImgFries}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>FRIES FUSION</div> 
                                        </div>
                                     </div>
                                    </SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgBurger' src={nearbyFoodImgBurger}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>BURGER BOMB</div> 
                                        </div>
                                     </div></SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgFries' src={nearbyFoodImgFries}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>FRIES FUSION</div> 
                                        </div>
                                     </div></SwiperSlide>
                    <SwiperSlide> <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgBurger' src={nearbyFoodImgBurger}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>BURGER BOMB</div> 
                                        </div>
                                     </div></SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgFries' src={nearbyFoodImgFries}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>FRIES FUSION</div> 
                                        </div>
                                     </div></SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgBurger' src={nearbyFoodImgBurger}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>BURGER BOMB</div> 
                                        </div>
                                     </div></SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgFries' src={nearbyFoodImgFries}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>FRIES FUSION</div> 
                                        </div>
                                     </div></SwiperSlide>
                    <SwiperSlide>  <div className='explore-nearby-bg' >
                                     <div><img className='nearbyFoodImgBurger' src={nearbyFoodImgBurger}></img></div>
                                        <div className='explore-nearby-food-name'>
                                            <div className='absolute-center'>BURGER BOMB</div> 
                                        </div>
                                     </div></SwiperSlide>
                    </Swiper>


            </div>
            <div className='heading-text'>Listen From Vendors</div>
            <div className='vendors-wrapper'>
            <Swiper slidesPerView={`${flag2}`} spaceBetween={10} pagination={{
                    "clickable": true
                    }} className="mySwiper">
                    <SwiperSlide>
                        <div><img src={vendor1} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <p className='vendor-location'>Khana Khaza corner</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={vendor2} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>

                        <div ><img src={vendor3} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            
                        <div><img src={vendor4} className='vendor-img'/>
                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div><img src={vendor1} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <p className='vendor-location'>Khana Khaza corner</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={vendor2} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span>
                        </div>
                        </SwiperSlide>
                            <SwiperSlide>

                        <div ><img src={vendor3} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            
                            <div><img src={vendor4} className='vendor-img'/>
                                <div className='vendor-name'>Ram Ramesh Chandra</div>
                                <span className='vendor-location'>Khana Khaza corner</span>
                            </div>
                            </SwiperSlide>
                
        </Swiper>
              </div>
            </div>

            <div className='container-fluid'>
                <div className='partner-wrapper'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='partner-banner-text'>Become Our<br/> Partner</div>
                            <div className='below-banner'>Become our partner in<br/>food. Start a new<br/>journey!</div>
                            <Button variant="danger" className="explore-btn md-font">Learn More</Button>

                        </div>
                        <div className='col-5'><img src={partner} className='partner-img'/></div>
                    </div>
                </div>
            </div>

            <div className='heading-text'>Our Services</div>
                <div className='our-services-wrapper'>
                    <div className='services'>
                        <div className='vendors'></div>
                        <div className='tiffin-service'></div>
                    </div>
                </div>
           


            <div className='container-fluid'>
                <div className='get-app'>
                <div className='row'> 
                <div className='col-7 get-app-left'>
                <div className='get-app-banner'>Get Foodistaan <br/>APP</div>
                <div className='below-get-app'>Download the application from Playstore or Apple store to get exciting updates.</div>
                <Button variant="success" className="explore-btn md-font">Download Now</Button>
                </div>  
                <div className='col-5'>
                    <div className='mobile'><img className='mobile-img' src={mobile}></img></div>
                </div>
                </div>
                </div>
            </div>

            <Footer/>

</div>

    )
}