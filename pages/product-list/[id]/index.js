import React from "react";
import ShopNow from "../../../components/ShopNow/ShopNow";
import Nav from "../../../components/Navbar/Nav";
import ProductList from "../../../components/ProductList/ProductList";

const index = () => {
  return (
    <div>
      <Nav />
      <ShopNow
        heading={"Workspace"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus hic molestias alias atque, doloremque velit soluta."
        }
      />
      <ProductList />
    </div>
  );
};

export default index;
