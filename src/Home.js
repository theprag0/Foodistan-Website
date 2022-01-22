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

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
           <SearchBar />
        </div>
        <div className="col-3"></div>
      </div>
      <SpecialOffers />
      <Trolly />
      <Deals /> 
      <OrderByCuisines />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default Home;
