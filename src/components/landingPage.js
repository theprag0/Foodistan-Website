import React from 'react'
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
import nearbyShop from './Images/nearbyShop.png'
import { Link } from 'react-router-dom';

const HomePage = ()=>{
    <Link to={"/explore"}></Link>
}

export default function landingPage(){
    return(
    <div>
        <div className='landingPage'>
        <Header/>
    <div className='row outer-search-bar container-fluid'>
        <div className='col-3'></div>
        <div className='col-6 search-bar'>
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
    <div className='col-3'></div>
        </div>
            <div className='banner-text'><h1 className='title'>Not sure where to get the best <br/>taste of street style?</h1>
                <h2 className='sub-title'>Perfect. We'll help you!</h2>
                <Link to={"/explore"}><Button variant="warning" className="explore-btn md-font" >Explore</Button></Link>
            </div>
            
        </div>

            {/* --------------------banner complete---------------------- */}

            <div className='container'>
                <div className='explore-nearby-wrapper'>
                    <div className='heading-text'>
                            Explore Nearby Food
                    </div>
                    <div className='row'>
                    <div className='col-3'>
                    <div className='nearby-food-card'>
                        {/* <div className='nearby-food-card-img' ></div> */}
                        <div className='nearby-food-card-details'>
                            <div className='shop-name'>Shaman Chaat Corner</div>
                            <div className='shop-location'>GT, Karnal Road</div>
                        </div>
                    </div>
                    </div>
                    <div className='col-3'>    <div className='nearby-food-card'>
                        {/* <div className='nearby-food-card-img' ></div> */}
                        <div className='nearby-food-card-details'>
                            <div className='shop-name'>Shaman Chaat Corner</div>
                            <div className='shop-location'>GT, Karnal Road</div>
                        </div>
                    </div></div>
                    <div className='col-3'>    <div className='nearby-food-card'>
                        {/* <div className='nearby-food-card-img' ></div> */}
                        <div className='nearby-food-card-details'>
                            <div className='shop-name'>Shaman Chaat Corner</div>
                            <div className='shop-location'>GT, Karnal Road</div>
                        </div>
                    </div></div>
                    <div className='col-3'>    <div className='nearby-food-card'>
                        {/* <div className='nearby-food-card-img' ></div> */}
                        <div className='nearby-food-card-details'>
                            <div className='shop-name'>Shaman Chaat Corner</div>
                            <div className='shop-location'>GT, Karnal Road</div>
                        </div>
                    </div></div>
                </div>
            </div>
                <div className='vendors-wrapper'>
                    <div className='heading-text'>Listen from vendors</div>
                    <div className='row'>
                        <div className='col-3'><img src={vendor1} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <p className='vendor-location'>Khana Khaza corner</p></div>


                        <div className='col-3'><img src={vendor2} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span></div>


                        <div className='col-3'><img src={vendor3} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span></div>

                            
                        <div className='col-3'><img src={vendor4} className='vendor-img'/>
                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span></div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='partner-wrapper'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='partner-banner-text'>Become Our<br/> Partner</div>
                            <div className='below-banner'>Become our partner in<br/>food. Start a new<br/>journey!</div>
                            <Button variant="warning" className="explore-btn md-font">Learn More</Button>

                        </div>
                        <div className='col-5'><img src={partner} className='partner-img'/></div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='vendors-wrapper'>
                    <div className='heading-text'>Popular vendors</div>
                    <div className='row'>
                        <div className='col-3'><img src={vendor1} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <p className='vendor-location'>Khana Khaza corner</p></div>


                        <div className='col-3'><img src={vendor2} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span></div>


                        <div className='col-3'><img src={vendor3} className='vendor-img'/>

                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span></div>

                            
                        <div className='col-3'><img src={vendor4} className='vendor-img'/>
                            <div className='vendor-name'>Ram Ramesh Chandra</div>
                            <span className='vendor-location'>Khana Khaza corner</span></div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='our-services-wrapper'>
                    <div className='heading-text'>Our Services</div>
                    <div className='services'>
                        <div className='vendors'></div>
                        <div className='tiffin-service'></div>
                    </div>
                </div>
            </div>


            <div className='container-fluid'>
                <div className='get-app'>
                <div className='get-app-banner'>Get Foodistaan <br/>APP</div>
                <div className='below-get-app'>Download the application from<br/>Playstore or Apple store to get exciting <br/>updates.</div>
                <Button variant="danger" className="explore-btn md-font">Learn More</Button>
                </div>
            </div>

            <Footer/>

</div>

    )
}