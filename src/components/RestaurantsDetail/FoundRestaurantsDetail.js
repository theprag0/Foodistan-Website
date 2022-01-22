import React from 'react';

import Cover from './Cover/Cover';
import Info from './Info/Info';
import Menu from './Menu/Menu';

const FoundRestaurantsDetail = ({ details }) => {
  return (
    <>
      <Cover type={details.type} rating={details.rating} name={details.name} />
      <Info
        name={details.name}
        type={details.type}
        address={details.address}
        offers={details.offers}
        costForTwo={details.costForTwo}
        delivery={details.delivery}
        seating={details.seating}
      />
      <Menu
        menuTypes={details.menuTypes}
        menu={details.menu}
        name={details.name}
        address={details.address}
        restaurantId={details.id}
      />
    </>
  );
};

export default FoundRestaurantsDetail;
