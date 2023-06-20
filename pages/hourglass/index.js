import React from "react";
import Products from "../../components/Products/Products";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
const style = {};
// Cookies.set("clickedNav", "hourglass");
const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={"hourglass"} categoryHeading={'Hour Glass'}/>
    </Animator>
  );
};

export default ProductsRoute;
