import React from "react";
import Products from "../../components/Products/Products";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
const style = {};
// Cookies.set("clickedNav", "allproducts");

const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={"allproducts"} categoryHeading={'All Prodcuts'}/>
    </Animator>
  );
};

export default ProductsRoute;
