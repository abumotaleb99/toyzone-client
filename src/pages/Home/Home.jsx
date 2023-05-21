import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import FeaturedToys from "./FeaturedToys";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <FeaturedToys></FeaturedToys>
    </>
  );
};

export default Home;
