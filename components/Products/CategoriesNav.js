import React, { useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
const style = {
  wrapper:
    "my-8 flex items-center justify-around w-[100%] md:w-[60%] lg:w-[50%] mx-auto flex-wrap font",
};

const CategoriesNav = (props) => {
  const [Click, setClick] = useState(props.cat);
  const handleNavClick = (value) => {
    // Cookies.set("clickedNav", value);
    setClick(value);
    // props.clickedCategory(value);
  };
  return (
    <ul className={style.wrapper} style={{ fontFamily: "Poppins, sans-serif" }}>
      <Link href="/allproducts">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "allproducts" && " font-bold "
          }`}
          onClick={() => handleNavClick("allproducts")}
        >
          All Products
        </li>
      </Link>
      <Link href="/vintage">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "vintage" && " font-bold "
          }`}
          onClick={() => handleNavClick("vintage")}
        >
          Vintage
        </li>
      </Link>
      <Link href="/tabletop">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "tabletop" && " font-bold "
          }`}
          onClick={() => handleNavClick("tabletop")}
        >
          Table Top
        </li>
      </Link>
      <Link href="/lightsandlamps">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "lightsandlamps" && " font-bold "
          }`}
          onClick={() => handleNavClick("lightsandlamps")}
        >
          Lights and Lamp
        </li>
      </Link>
      <Link href="/hourglass">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "hourglass" && " font-bold "
          }`}
          onClick={() => handleNavClick("hourglass")}
        >
          Hourglass
        </li>
      </Link>
      <Link href="/mirrorcomb">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "mirrorcomb" && " font-bold "
          }`}
          onClick={() => handleNavClick("mirrorcomb")}
        >
          Mirror Comb
        </li>
      </Link>
      <Link href="/woodwork">
        <li
          className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
            Click == "woodwork" && " font-bold "
          }`}
          onClick={() => handleNavClick("woodwork")}
        >
          Wood Work
        </li>
      </Link>
    </ul>
  );
};

export default CategoriesNav;
