import React, { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useRouter } from "next/router";

import client from "../api/client";
const style = {
  wrapper: "",
};
const index = () => {
  const [ProductData, setProductData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    // console.log(router.query.id)
    const getProduct = async () => {
      const allProduct = await client.fetch(
        `*[_type=='allProduct' && slug.current =='${router.query.id}']`
      );
      console.log("first");
      const featuredProduct = await client.fetch(
        `*[_type=='featuredProduct' && slug.current =='${router.query.id}']`
      );
      if (allProduct && allProduct.length > 0) {
        setProductData(allProduct);
      }
      if (featuredProduct && featuredProduct.length > 0) {
        setProductData(featuredProduct);
      }
    };
    getProduct();
  }, [router.isReady]);
  // console.log(ProductData[0]);
  return (
    <>
      {ProductData.length == 0 && <p className="h-[80vh]"></p>}
      {ProductData.length > 0 && (
        <ProductDetails
          productName={ProductData[0].name}
          price={ProductData[0].price}
          description={ProductData[0].description}
          information={ProductData[0].information}
          slugValue={ProductData[0].slug.current}
          image={ProductData[0].image}
          reviews={ProductData[0].reviews}
          rating={ProductData[0].rating}
          size={ProductData[0].size}
          color={ProductData[0].color}
          categoryMainTitle={ProductData[0].categoryMainTitle}
          customCategoryData={ProductData[0].customCategory}
          categoryMainTitle1={ProductData[0].categoryMainTitle1}
          customCategoryData1={ProductData[0].customCategory1}
          images={ProductData[0].images}
          stock={ProductData[0].stock}
          discount={ProductData[0].discount}
          category={ProductData[0].category}
          // categoryColors={ProductData[0].categoryColors}
        />
      )}
    </>
  );
};

export default index;

// export  function getServerSideProps(context) {
//   const featuredProduct = await client.fetch(
//     `*[_type == "featuredProduct" && slug.current =='${context.params.id}']`
//   );
//   return {
//     props: { data: featuredProduct },
//   };
// }
