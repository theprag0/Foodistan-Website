import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/common/layout/Layout';
import FoundRestaurantsDetail from '../components/RestaurantsDetail/FoundRestaurantsDetail';
import { DUMMY_RESTAURANT_DETAIL } from './dummy-restaurant-detail';

const RestaurantDetail = () => {
  const { rid } = useParams();

  //finding detail from store data by checking params id and data id
  const resDetail = DUMMY_RESTAURANT_DETAIL.find((r) => r.id === rid);

  if (!resDetail) {
    return <h1>No Restaurant found!</h1>;
  }

  return (
    <>
      <Layout>
        <FoundRestaurantsDetail details={resDetail} />
      </Layout>
    </>
  );
};

export default RestaurantDetail;
