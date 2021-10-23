import React from "react";
import Header from "./components/common/header";
import SearchBar from "./components/common/searchBar.js";
import SpecialOffers from "./components/SpecialOffers";
import Deals from "./components/DealsOfTheDay";
import OrderByCuisines from "./components/OrderByCuisines";
import Footer from "./components/common/footer";
import Trolly from "./components/common/trolly";
import ListingCards from "./components/common/listingCards";
import Item from "./delivery-dashboard/food-item";
import Menu from "./delivery-dashboard/main-menu";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <SpecialOffers />
      <Trolly />
      <Deals />
      <OrderByCuisines />
      <ListingCards />
      <Footer />
    </div>
  );
}

export default Home;
