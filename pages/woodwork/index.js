import React from "react";
import Products from "../../components/Products/Products";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
const style = {};
// Cookies.set("clickedNav", "woodwork");

const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={"woodwork"} categoryHeading={'Wood Work'}/>
    </Animator>
  );
};

export default ProductsRoute;
