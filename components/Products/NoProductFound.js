import React from "react";
import Link from "next/link";
const style = {
  heading: "w-[100%] flex items-center justify-center flex-col",
  smallHeading:
    "border-b-2 border-stone-200 text-xl md:text-1xl max-w-fit mx-auto py-2 text-primary ",
  btn: "text-lg md:text-lg rounded-full px-12 md:px-12 py-4 md:py-6 max-w-fit mx-auto bg-primary text-stone-100 hover:bg-opacity-[0.9] transition duration-[300ms] my-5",
};

const NoProductFound = () => {
  return (
    <div className={style.heading}>
      <h2
        className={style.smallHeading}
        style={{ fontFamily: "Yeseva One, cursive" }}
      >
        Available Soon!
      </h2>
      <Link href="/contact">
        <button
          className={style.btn}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Contact Us Today
        </button>
      </Link>
    </div>
  );
};

export default NoProductFound;
