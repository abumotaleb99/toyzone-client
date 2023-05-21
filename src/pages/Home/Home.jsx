import React, { useEffect } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import FeaturedToys from "./FeaturedToys";
import Services from "./Services";

const Home = () => {
  useEffect(() => {
    document.title = "ToyZone | Home";
  }, []);

  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <FeaturedToys></FeaturedToys>
      <Services></Services>
    </>
  );
};

export default Home;
