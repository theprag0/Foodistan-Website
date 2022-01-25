import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { auth,googleAuthProvider } from "./firebase";
import app from "./firebase";
import { RecaptchaVerifier,signInWithPopup } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { Link } from "react-router-dom";


export default function Login() {

  const [phoneno, setPhoneno] = useState('');
  const [countryCode,setCountryCode] = useState("+91");
  const [OTP, setOTP] = useState('');


  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.   
      }
    }, auth);
  }


  const requestOTP = (e)=>{
    e.preventDefault();
    const phoneNumber = countryCode +phoneno;
   
    if(phoneNumber.length>=12){
      generateRecaptcha();
     
      let appVerifier = window.recaptchaVerifier;
      console.log(appVerifier);
      signInWithPhoneNumber(auth,phoneNumber,appVerifier)
      .then(confirmationResult =>{
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

  const verifyOTP = (e)=>{
    e.preventDefault();
    let otp = e.target.value;
    setOTP(otp);
    if(otp.length===6)
    {
      let confirmationResult= window.confirmationResult;
      confirmationResult.confirm(otp).then((result)=>{
        const user = result.user;
        console.log(JSON.stringify(user))
        alert("User is verified")
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

    //Google , Facebook authentication function
  const handleOnClick = async(provider)=>{
       signInWithPopup(auth,provider)
      .then((res)=>{     
          console.log( res.user);
      })
      .catch((er)=>{
         console.log(er);
      })
 };





  return (
    <div className="container-fluid normal-font">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 login-container-left d-flex flex-column justify-content-center">
          <p className="main-heading-font font-weight-bolder py-2">
            Missing your
          </p>
          <p className="main-heading-font font-weight-bolder py-2">
            favourite pani puri
          </p>
          <p className="main-heading-font font-weight-bolder py-2"> waala?</p>
          <p className="heading-font text-white py-2">
            Order food from your favourite vendors
          </p>
          <p className="heading-font text-white py-2">
            and even enjoy the delicious ghar ka khana.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 login-container-right">
          <img src="/logo.png" width="80%" />
          <div>
            <button className="active-log-sign login-tab-btn">Login</button>
            <Link to='/signUp'><button className="signup-tab-btn-L">Sign Up</button></Link>
          </div>
          <div className="d-flex align-items-center login-form-container mx-auto">
            <select 
            className="login-input-select" 
            onChange={e => {setCountryCode(e.target.value); }}
            >
              <option>+91</option>
              <option>+92</option>
            </select>
            
            <form onSubmit={requestOTP} className="my-5 login-form">
              <div id="sign-in-button"></div>
              <input
                type="tel"
                className="login-input"
                placeholder="Enter mobile number"
                onChange={e => {
                  setPhoneno(e.target.value);
                }}
              ></input>
              <button
                className="login-input-btn"
              >
                <FaArrowRight />
              </button>
             <div className="sign-in-button"></div>
            </form>
       

            <form className="my-5 login-form">
             
              <input
                type="tel"
                className="login-input"
                placeholder="Enter OTP"
                value={OTP}
                onChange={verifyOTP}
              ></input>
              <button               
                className="login-input-btn"
              >
                <FaArrowRight />
              </button>
            </form>



          </div>
          <div className="d-flex justify-content-center align-items-center my-2">
            <div className="login-or-dash"></div>
            <p className="px-2">or</p>
            <div className="login-or-dash"></div>
          </div>
          <div className="my-5">
            <button onClick={()=>handleOnClick(googleAuthProvider)} className="google-tab-btn mx-2 ">
              <div className="d-flex justify-content-center align-items-center">
                <img src="/goggle.png" className="login-icons" />
                <p className="mx-2">Login with Google</p>
              </div>
            </button>
            {/* <button className="facebook-tab-btn mx-2">
              <div className="d-flex justify-content-center align-items-center">
                <img src="/facebook.png" className="login-icons" />
                <p className="mx-2">Login with Facebook</p>
              </div>
            </button> */}
          </div>
          <button className="email-tab-btn">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/mail.png" className="login-icons" />
              <p className="mx-2">Login with email</p>
            </div>
          </button>
          <p className="my-5">
            By continuing from this page you are agreeing to our Terms and
            Policy
          </p>
        </div>
      </div>
    </div>
  );
}
