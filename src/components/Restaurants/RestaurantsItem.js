import React from 'react';

import { FaStar, FaShoppingBag } from 'react-icons/fa';
import { GiScooter } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RestaurantsItem = (props) => {
  const name =
    props.name.length > 25 ? `${props.name.slice(0, 25)}...` : props.name;
  const cuisines = props.cuisines.split(',').splice(0, 2);
  const locationArray = props.address.includes(',')
    ? props.address.split(',')
    : props.address.split(' ');
  const lastIndex = locationArray.length - 1;
  const locationToShow = `${locationArray[lastIndex - 1]}, ${
    locationArray[lastIndex]
  }`;

  return (
    <div className="restaurant-item">
      {props.foodistaanCertified && (
        <div className="restaurant-badge">
          <h1>
            Foodi<span>staan</span> <span>+</span>
          </h1>
        </div>
      )}
      {props.foodistaanCertified && (
        <div className="restaurant-badge__bottom"></div>
      )}
      <div className="restaurant-card">
        <Link to={`/restaurant/${props.id}`}>
          <div className="restaurant-card__image-container">
            <img src={props.image} alt="" />
          </div>
          <div className="restaurant__info">
            <div className="restaurant__name-ratings">
              <h1>{name}</h1>
              <p>
                {props.stars}
                <FaStar />
              </p>
            </div>
            <div className="restaurant__cuisines-cost">
              <div className="restaurant__cuisines">
                {cuisines.map((c, i) => (
                  <p key={`${c}-${i}`}>{c}</p>
                ))}
              </div>
              <h1 className="cost">₹ {props.cost} for Two</h1>
            </div>
            <hr />
            <div className="restaurant-specifications">
              <div className="restaurant-specifications__delivery-takeaway">
                <h1
                  className={
                    props.delivery ? 'specification' : 'error-specification'
                  }
                >
                  <GiScooter /> Delivery
                </h1>
                <h1
                  className={
                    props.takeaway ? 'specification' : 'error-specification'
                  }
                >
                  <FaShoppingBag /> Takeaway
                </h1>
              </div>
              <p className="specification">
                <IoLocationSharp /> {locationToShow}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantsItem;
