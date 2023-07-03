import React from "react";
import Home from "./Home";
import Stats from "./Stats";
import Features from "./Features";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Trending from "./Trending";
import Seller from "./Seller";
import Nav from '../Navbar/Nav'
const Main = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Stats />
      <Category />
      <Features />
      <Trending />
      <Testimonial />
      <Seller />
    </div>
  );
};

export default Main;
