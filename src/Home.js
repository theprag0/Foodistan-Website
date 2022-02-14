import React from 'react';
import Header from './components/common/header';
import SearchBar from './components/common/searchBar.js';
import SpecialOffers from './components/SpecialOffers';
import Deals from './components/DealsOfTheDay';
import OrderByCuisines from './components/OrderByCuisines';
import Footer from './components/common/footer';
import Trolly from './components/common/trolly';
import Item from './delivery-dashboard/food-item';
import Menu from './delivery-dashboard/main-menu';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Restaurants from './components/Restaurants/Restaurants';
import Layout from './components/common/layout/Layout';

function Home() {
  return (
    <div className="App">
      <Layout>
        <SearchBar />
        <SpecialOffers />
        <Trolly />
        <Deals />
        <OrderByCuisines />
        <Restaurants />
      </Layout>
    </div>
  );
}

export default Home;
