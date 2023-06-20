import React from "react";
import Cookies from "js-cookie";
import Link from "next/link";
const style = {
  wrapper: "px-4 py-4",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  heading:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-primary text-3xl md:text-5xl font-semibold ",
  trendingProductsContainer:
    "flex items-center justify-around w-[95%] md:w-[70%] mx-auto flex-wrap",
  smallHeading:
    " text-4xl md:text-4xl max-w-fit mx-auto py-2 text-green-900 flex",
  categoriesContainer:
    "flex w-[99%] lg:w-[50%] mx-auto items-center justify-center",
  singleCategory:
    "font text-primary hover:opacity-[0.9] text-center py-5 cursor-pointer font-semibold border-move-animation",
};

function HomeCategories() {
  return (
    <div className={style.wrapper}>
      <div className={style.headingContainer}>
        <h2 className={style.heading}>CATEGORIES</h2>
        <p className="border-b-[6px] border-pink-400 w-[8vw] md:w-[4vw] "></p>
      </div>
      <div className={style.categoriesContainer}>
        <div className="w-[90%] md:w-[50%] flex flex-col items-center justify-center">
          <Link href="/vintage">
            <p
              className={style.singleCategory}
              onClick={() => Cookies.set("clickedNav", "vintage")}
            >
              VINTAGE
            </p>
          </Link>
          <Link href="/tabletop">
            <p
              className={style.singleCategory}
              onClick={() => Cookies.set("clickedNav", "tabletop")}
            >
              TABLE TOP
            </p>
          </Link>
          <Link href="/lightsandlamps">
            <p
              className={style.singleCategory}
              onClick={() => Cookies.set("clickedNav", "lightsandlamps")}
            >
              LIGHTS AND LAMPS
            </p>
          </Link>
        </div>
        <div className="w-[90%] md:w-[50%] flex flex-col items-center justify-center">
          <Link href="/hourglass">
            <p
              className={style.singleCategory}
              onClick={() => Cookies.set("clickedNav", "hourglass")}
            >
              HOURGLASS
            </p>
          </Link>
          <Link href="/mirrorcomb">
            <p
              className={style.singleCategory}
              onClick={() => Cookies.set("clickedNav", "mirrorcomb")}
            >
              MIRROR COMB
            </p>
          </Link>
          <Link href="/woodwork">
            <p
              className={style.singleCategory}
              onClick={() => Cookies.set("clickedNav", "woodwork")}
            >
              WOOD WORK
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
