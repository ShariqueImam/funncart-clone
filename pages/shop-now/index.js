import React from "react";
import ShopNow from "../../components/ShopNow/ShopNow";
import Category from "../../components/HomeClone/Category";
import Trending from "../../components/HomeClone/Trending";
const index = () => {
  return (
    <div>
      <ShopNow
        heading={"New Arrivals"}
        description={
          "Thoughtfully designed objects for the workspace, home, and travel."
        }
      />
      <Category />
      <Trending />
    </div>
  );
};

export default index;
