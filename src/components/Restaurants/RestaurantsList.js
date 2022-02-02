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
            name={r.Name}
            address={r.Address}
            cost={r.Cost}
            type={r.cuisine}
            distance={r.distance}
            image={r.FoodImage}
            delivery={r.Delivery}
            takeaway={r.Takeaway}
            stars={r.Stars}
            cuisines={r.Cuisines}
            foodistaanCertified={r.FoodistaanCertified}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
