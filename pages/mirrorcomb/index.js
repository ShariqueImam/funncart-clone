import React from "react";
import Products from "../../components/Products/Products";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
const style = {};
// Cookies.set("clickedNav", "mirrorcomb");

const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={"mirrorcomb"} categoryHeading={'Mirror Comb'}/>
    </Animator>
  );
};

export default ProductsRoute;
