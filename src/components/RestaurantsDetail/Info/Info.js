import React from 'react';
import Features from './Features/Features';

import './Info.css';
import NameAddress from './NameAddress/NameAddress';
import Offers from './Offers/Offers';

const Info = (props) => {
  return (
    <section>
      <div className="restaurant-detail__info-information">
        <NameAddress
          name={props.name}
          type={props.type}
          address={props.address}
        />
        <Offers offers={props.offers} />
      </div>
      <Features
        costForTwo={props.costForTwo}
        delivery={props.delivery}
        seating={props.seating}
      />
    </section>
  );
};

export default Info;
