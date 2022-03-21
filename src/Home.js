import React from 'react';
import HomeNavbar from './HomeNavbar';
import SearchBar from './components/common/searchBar.js';
import SpecialOffers from './components/SpecialOffers';
import OrderByCuisines from './components/OrderByCuisines';
import Footer from './components/common/footer';
import Trolly from './components/common/trolly';
import Restaurants from './components/Restaurants/Restaurants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  return (
    <div className="App">
      <HomeNavbar />
      <main className='main'>
        <div className='home-search-bar'>
          <SearchBar />
        </div>
        <SpecialOffers />
        <Trolly />
        {/* <Deals /> */}
        <OrderByCuisines />
        <Restaurants />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
