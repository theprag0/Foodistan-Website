import React from "react";
import Header from "./components/common/header";
import SpecialOffers from "./components/SpecialOffers";
import Deals from "./components/DealsOfTheDay";
import Footer from "./components/common/footer";



function Home() {
  return (
    <div className="App">
      <Header />{" "}
      <SpecialOffers />{" "}
      <Deals />{" "}
      <Footer />{" "}
    </div>
  );
}

export default Home;
