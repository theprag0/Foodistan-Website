import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';

import './Menu.css';
import MenuList from './MenuList/MenuList';
import OverView from './OverView/OverView';
import MenuTypes from './Types/MenuTypes';

const Menu = ({ menuTypes, menu, name, address, restaurantId }) => {
  const [selectedType, setSelectedType] = useState('Recommended');
  const [selectedMethod, setSelectedMethod] = useState('Delivery');

  const [filteredMenu, setFilteredMenu] = useState([]);

  const typeClickHandler = (type) => {
    setSelectedType(type);
  };

  const methodClickHandler = (method) => {
    setSelectedMethod(method);
  };

  useEffect(() => {
    const filteredListBySelectedType = menu.filter(
      (m) => m.type === selectedType
    );
    setFilteredMenu(filteredListBySelectedType);
  }, [selectedType, menu]);

  return (
    <section className="menu">
      <MenuTypes
        types={menuTypes}
        selectedType={selectedType}
        onSelect={typeClickHandler}
        selectedMethod={selectedMethod}
      />
      {selectedMethod !== 'Overview' && (
        <MenuList
          menu={filteredMenu}
          restaurantName={name}
          address={address}
          restaurantId={restaurantId}
          selectedMethod={selectedMethod}
          onSelectMethod={methodClickHandler}
        />
      )}
      {selectedMethod === 'Overview' && (
        <OverView
          name={name}
          selectedMethod={selectedMethod}
          onSelectMethod={methodClickHandler}
        />
      )}
      <Cart />
    </section>
  );
};

export default Menu;
