import React, { useState, useEffect } from "react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import SingleFeaturedProduct from "../../SingleProduct/SingleFeaturedProduct";
import client from "../../../pages/api/client.js";

const style = {
  wrapper: "px-4 py-4",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  heading:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-primary text-3xl md:text-5xl font-semibold ",
  trendingProductsContainer:
    "flex items-center justify-around w-[95%] md:w-[70%] mx-auto flex-wrap",
  smallHeading:
    " text-4xl md:text-4xl max-w-fit mx-auto py-2 text-green-900 flex",
  productsContainer:
    "flex flex-wrap w-[99%] md:w-[95%] lg:w-[70%] gap-2 md:gap-8 mx-auto justify-around sm:justify-center",
};



const FeaturedProducts = ({ data }) => {
  const [Product, setProduct] = useState([]);
  // sending the request to get the data from the server of sanity
  useEffect(() => {
    const getData = async () => {
      const p = await client.fetch(`*[_type == "featuredProduct"]`);
      setProduct(p);
    };
    getData();
  }, []);
  // console.log(Product);
  return (
    <div className={style.wrapper}>
      <div className={style.headingContainer}>
        <h2 className={style.heading}>Trending Now</h2>
        <p className="border-b-[6px] border-pink-400 w-[8vw] md:w-[4vw]"></p>
      </div>
      <div className={style.trendingProductsContainer}>
        {Product.map((single) => (
          <SingleFeaturedProduct item={single} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
