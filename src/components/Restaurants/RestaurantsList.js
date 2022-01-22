import React from 'react';
import RestaurantsItem from './RestaurantsItem';
import './Restaurants.css';

const RestaurantsList = ({ restaurants }) => {
  return (
    <div className="container-fluid normal-font main-container res-container">
      <div className="row my-2 justify-content-start">
        {restaurants.map((r) => (
          <RestaurantsItem
            key={r.id}
            id={r.id}
            name={r.name}
            address={r.address}
            type={r.type}
            distance={r.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
