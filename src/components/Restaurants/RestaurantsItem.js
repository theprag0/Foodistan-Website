import React from 'react';

import { FaStar, FaShoppingBag, FaLocationArrow } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { HiCurrencyRupee } from 'react-icons/hi';
import { GiScooter } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RestaurantsItem = (props) => {
  const stars = [];
  for (let i = 0; i < props.stars; i++) {
    stars.push(<FaStar key={`${props.id}-${i}`} />);
  }
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
      <div className="card" style={{ height: '42.5rem' }}> 
        <Link to={`/restaurant/${props.id}`}>
          <div className="card-image-container ">
            <img
              className="card-image"
              src={props.image}
              alt="not found"
              style={{ objectFit: 'cover' }}
            />
            {props.foodistaanCertified && (
              <p className="card-image-footer d-flex align-items-center">
                Foodistan - Certified
                <MdVerifiedUser className="heading-font mx-2" />
              </p>
            )}
          </div>
          <div className="card-details">
            <div className="d-flex justify-content-between">
              <div>
                <p className="heading-font font-weight-bolder">{props.name}</p>
                <p className="text-muted my-1">{props.cuisines}</p>
              </div>
              <div className="heading-font text-warning">
                {stars.map((s) => s)}
              </div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div className="d-flex align-items-center">
                <HiCurrencyRupee className="heading-font mx-2" />
                <p>Cost For Two {props.cost}</p>
              </div>
              {props.delivery && (
                <div className="d-flex align-items-center">
                  <GiScooter className="heading-font mx-2" />
                  <p> Delivery</p>
                </div>
              )}
              {props.takeaway && (
                <div className="d-flex align-items-center">
                  <FaShoppingBag className="normal-heading-font mx-2" />
                  <p>Takeaway</p>
                </div>
              )}
            </div>
          </div>
          <div className="card-footer text-white d-flex justify-content-between align-items-center">
            <p className="d-flex justify-content-between align-items-center">
              <IoLocationSharp className="heading-font mx-2" />
              {props.address}
            </p>{' '}
            <p className="d-flex justify-content-between align-items-center">
              <FaLocationArrow className="heading-font mx-2" /> {props.distance}{' '}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantsItem;
