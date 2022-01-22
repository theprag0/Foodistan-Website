import React from 'react';
import RestaurantsList from './RestaurantsList';

const listing = [
  {
    id: 'r1',
    name: 'Anna Dosa Corner',
    type: 'South Indian',
    address: 'Sector-1',
    distance: '1km',
  },
  {
    id: 'r2',
    name: 'Pizza Wings',
    type: 'Pizza',
    address: 'Sector-2',
    distance: '2km',
  },
  {
    id: 'r3',
    name: 'Pizza Wings New',
    type: 'Pizza Snacks',
    address: 'Sector-3',
    distance: '3km',
  },
  {
    id: 'r4',
    name: 'Dominoz',
    type: 'snacks',
    address: 'Sector-1',
    distance: '1km',
  },
  {
    id: 'r5',
    name: 'Pizza Wings',
    type: 'Pizza',
    address: 'Sector-2',
    distance: '2km',
  },
  {
    id: 'r6',
    name: 'Pizza Wings New',
    type: 'Pizza Snacks',
    address: 'Sector-3',
    distance: '3km',
  },
];

const Restaurants = () => {
  return <RestaurantsList restaurants={listing} />;
};

export default Restaurants;
