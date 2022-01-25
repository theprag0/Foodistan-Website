import React from 'react';
import Features from './Features/Features';

import './Info.css';
import NameAddress from './NameAddress/NameAddress';
import Offers from './Offers/Offers';

const offers = [
  {
    title: '20% OFF UPTO ₹ 300',
    id: 'o1',
    offer: 'USE MASTERCARD100 | APPLIED 200 ABOVE',
  },
  {
    title: '20% OFF UPTO ₹ 300',
    id: 'o2',
    offer: 'USE MASTERCARD100 | APPLIED 200 ABOVE',
  },
];
const Info = (props) => {
  return (
    <section>
      <div className="restaurant-detail__info-information">
        <NameAddress
          name={props.name}
          type={props.type}
          address={props.address}
        />
        <Offers offers={offers} />
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
