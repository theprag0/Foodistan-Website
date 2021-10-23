import React from "react";
import Header from "./components/common/header";
import SpecialOffers from "./components/SpecialOffers";
import Deals from "./components/DealsOfTheDay";
import Footer from "./components/common/footer";
import Trolly from "./components/common/trolly";
import ListingCards from "./components/common/listingCards";
import Item from "./delivery-dashboard/food-item";
import Menu from "./delivery-dashboard/main-menu";

function Home() {
  return (
    <div className="App">
      <Header />{" "}
      <SpecialOffers />
          <Deals />
          <Trolly />
          <ListingCards />
      {/* <Item /> */}
      <Menu />
      <Footer />
    </div>
  );
}

export default Home;
