import React from 'react';
import Layout from '../components/common/layout/Layout';
import Cart from '../components/RestaurantsDetail/Menu/Cart/Cart';

const Checkout = () => {
  return (
    <>
      <Layout>
        <Cart checkout />
      </Layout>
    </>
  );
};

export default Checkout;
