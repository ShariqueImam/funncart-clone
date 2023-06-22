import React from "react";
import Home from "./Home";
import Stats from "./Stats";
import Features from "./Features";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Trending from "./Trending";
import Seller from "./Seller";
import Footer from "./Footer";
const Main = () => {
  return (
    <div>
      <Home />
      <Stats />
      <Category />
      <Features />
      <Trending />
      <Testimonial />
      <Seller />
      <Footer />
    </div>
  );
};

export default Main;
