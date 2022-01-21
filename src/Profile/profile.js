import React from "react";
import "../Profile/profile.css"
import Header from "../components/common/header";
import profileIMG from "../Profile/profileIMG.png"
import donuts from "../Profile/donuts.png";
import discountImg from "../Profile/voucher-discount.png"
import Footer from "../components/common/footer";
import { Link } from "react-router-dom";

export default function profile(){
    return(
        <div className="bg-color">
            <Header/>
            <div className="container marginB">
               <div className="row outer-container">
                   <div className="col-5 light-yellow profile-attributes">
                       <div className="image-card">
                           <img className="img-size" src={profileIMG}></img>
                           <h2 className="big-font ">Anushka Singh</h2>
                       </div>
                       <hr />
                       <div className="attributes-container">
                           <ul className="big-font">
                               <li className="marginB active"><Link to="/profile" className=" big-font">Profile</Link></li>
                               <li className="marginB"><Link to="/orders"  className="big-font">Orders</Link></li>
                               <li className="marginB"><Link to="/track-order" className="big-font">Track my order</Link></li>
                               <li className="marginB"><Link to="/payments" className="big-font">Payments</Link></li>
                               <li className="marginB"><Link to="/address"  className="big-font">Addresses</Link></li>
                               <li className="marginB"><Link to="/notifications"  className="big-font">Notifications</Link></li>
                           </ul>
                       </div>
                    </div>
                   <div className="col-7 white white-container">
                       <h1 className="big-font marginB-12rem" >Personal Information</h1>
                       <div className="row">
                           <div className="col-6 marginB">
                               <h1 className="big-font">Name</h1>
                           </div>
                           <div className="col-6 marginB">
                               <h1 className="big-font-thin">Anushka Singh</h1>
                           </div>
                           <div className="col-6 marginB">
                           <h1 className="big-font">Email</h1>
                           </div>
                           <div className="col-6 marginB">
                           <h1 className="big-font-thin">anushka123@gmail.com</h1>
                           </div>
                           <div className="col-6 marginB">
                           <h1 className="big-font">Mobile No.</h1>
                           </div>
                           <div className="col-6 marginB">
                           <h1 className="big-font-thin">+91 8877226615<br/> <br/>+91 8877226615</h1>
                           </div>
                           <div className="col-6 marginB ">
                           <h1 className="big-font">Points</h1>
                           </div><div className="col-6 marginB">
                           <h1 className="big-font-thin">500</h1>
                           </div>
                       </div>
                         <div>
                             <h1 className="big-font marginB">Vouchers Available</h1>
                             <div className="voucher-img">
                                 <div className="row">
                                    <div className="col-4 voucher-discount" style={{background: `url(${discountImg}) center center no-repeat`}}><span className="rotate45">50%</span></div>
                                    <div className="col-8 voucher-details">
                                        <h1 className="">Get <span className="highlight-clr discountPercentage">50%</span> off on <br/>Sweets</h1>
                                    </div>
                                    <div className="col-5" style={{"textAlign":'left'}} ><img className="donut-img" src={donuts}></img></div>
                                    <div className="col-7 voucher-code"><h1><span style={{"font-weight":'bold'}}>USE CODE</span><br/><span className="highlight-clr">#FOODISTAAN50</span></h1></div>
                                 </div>
                             </div>
                         </div>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}