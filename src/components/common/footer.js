import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function footer() {
  return (
    <>
      <footer>
        <div className="container-fluid normal-font">
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4"></div>
            <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
              <ul className="">
                <li className="heading-font my-4 text-dark">Company</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Report</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
              {" "}
              <ul>
                <li className="heading-font my-4 text-dark">For You</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Become a Partner</li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4  text-light">
              <div className="footer-download-container mx-auto my-4 px-5 d-flex">
                <FaApple className="footer-download-icons" />
                <div className="my-auto">
                  <p>Download From the</p>
                  <p className=" heading-font text-center font-weight-bolder">
                    App Store
                  </p>
                </div>
              </div>
              <div className="footer-download-container mx-auto my-4 px-5 d-flex">
                <FaGooglePlay className="footer-download-icons" />
                <div className="my-auto">
                  <p>Download From the</p>
                  <p className="heading-font text-center font-weight-bolder">
                    Google Play
                  </p>
                </div>
              </div>
              <div className="text-dark d-flex justify-content-center my-4">
                <FaTwitter className="footer-icons" />
                <FaFacebookF className="footer-icons"/>
                <FaInstagram className="footer-icons"/>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row px-5">
            <p className=" py-2">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners.
            </p>
            <p className="py-2">
              2008-2021 © Zomato™ Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
