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
              name={f.name}
              id={f.id}
              price={f.price}
              description={f.description}
              dietaryType={f.dietaryType}
              image={f.image}
              type={f.type}
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
