import React from 'react';
import { Link } from 'react-router-dom';

import phoneImg from '../../..//images/phone.png';
import googlePlayImg from '../../../images/googlePlay.png';
import './Cover.css';

const Cover = () => {
  return (
    <section className="cover-about__us">
      <div className="cover__text">
        <h1>Love Street Food?</h1>
        <p>
          Enjoy your favorite street food from the comfort and safety of your
          home.
        </p>
        <Link className="cover__text-link" to="/explore">
          Order Now
        </Link>
      </div>
      <div className="img-container__aboutus">
        <img src={phoneImg} alt="phone" />
        <img src={phoneImg} alt="phone" />
      </div>
      <div className="cover-footer">
        <img src={googlePlayImg} alt="googleplay" />
        <p>Streato App - Coming soon</p>
      </div>
    </section>
  );
};

export default Cover;
