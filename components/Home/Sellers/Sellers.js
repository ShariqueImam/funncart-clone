import React from "react";
import Link from "next/link";
const style = {
  wrapper: "px-4 py-4",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  heading:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-primary text-3xl md:text-5xl font-semibold ",
  trendingProductsContainer:
    "flex items-center justify-around w-[95%] md:w-[70%] mx-auto flex-wrap",
  smallHeading:
    "text-4xl md:text-4xl max-w-fit mx-auto py-2 text-green-900 flex",
  sellersContainer:
    "flex w-[99%] lg:w-[50%] mx-auto items-start md:items-center justify-between my-8 md:my-8 flex-col md:flex-row",
  singleSeller: "font text-primary hover:opacity-[0.9] py-5 font-semibold w-[100%] md:w-[70%] ",
  sellerName: "text-2xl md:text-3xl ",
  sellerDetails: "text-gray-800 font-normal text-sm my-4 md:my-4 ",
  btn: "bg-primary text-white text-center px-4 md:px-5 py-2 md:py-3 ",
};
const Sellers = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headingContainer}>
        <h2 className={style.heading}>OUR SELLERS</h2>
        <p className="border-b-[6px] border-pink-400 w-[8vw] md:w-[4vw]"></p>
      </div>
      <div className={style.sellersContainer}>
        <section className={style.singleSeller}>
          <section className="">
            <h2 className={style.sellerName}>Shahriyar Amin</h2>
            {/* <p className={style.sellerDetails}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              deleniti enim dolore optio culpa, ullam aliquam ut odit nisi
              quaerat.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              deleniti enim dolore optio culpa, ullam aliquam ut odit nisi
            </p> */}
          </section>
        </section>
        <Link href="/woodwork">
          <button className={style.btn}>View Products</button>
        </Link>
      </div>
    </div>
  );
};
export default Sellers;
