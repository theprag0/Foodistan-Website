import React from 'react';
import Tabs from '../Tabs/Tabs';

import MenuItem from './MenuItem';
import './MenuList.css';

const MenuList = ({
  menu,
  selectedMethod,
  onSelectMethod,
  restaurantName,
  address,
  restaurantId,
}) => {
  return (
    <>
      <ul className="menu-list__list">
        <Tabs selectedMethod={selectedMethod} onSelectMethod={onSelectMethod} />
        <div className="menu-list__items">
          {menu.map((f) => (
            <MenuItem
              key={f.id}
              name={f.title}
              id={f.id}
              price={+f.price}
              description={f.description}
              veg={f.veg}
              image={f.image}
              type={f.cuisine}
              selectedMethod={selectedMethod}
              restaurantName={restaurantName}
              address={address}
              restaurantId={restaurantId}
            />
          ))}
        </div>
      </ul>
    </>
  );
};

export default MenuList;
