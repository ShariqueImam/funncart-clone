import React, { useState } from "react";
import Description from "./Description";
import Information from "./Information";
import Review from "./Review";

const MoreDetails = ({
  reviews,
  description,
  information,
  productName,
  slug,
}) => {
  const [WhichNav, setWhichNav] = useState("information");
  const handleNavClick = (value) => {
    setWhichNav(value);
  };
  const style = {
    wrapper: "py-6 sm:py-4 md:py-4 lg:py-5 rounded-md font",
    navContainer: "flex justify-between bg-white px-1 sm:px-6 md:px-8 lg:px-12",
    button1: `rounded-md w-[50%] md:w-[50%] text-center hover:bg-opacity-[0.9] transition duration-[200ms] ${
      WhichNav == "information"
        ? "bg-primary text-gray-50"
        : "bg-[#ffffff] text-primary"
    }   px-4 sm:px-16 md:px-24 lg:px-36 py-2 md:py-4 lg:px-32 text-lg cursor-pointer my-7 md:my-6`,
    button2: `rounded-md w-[50%] md:w-[50%] text-center hover:bg-opacity-[0.9] transition duration-[200ms] ${
      WhichNav == "reviews"
        ? "bg-primary text-gray-50"
        : "bg-[#ffffff] text-primary"
    }    px-4 sm:px-16 md:px-24 lg:px-36 py-2 md:py-4 lg:px-32 text-lg cursor-pointer my-7 md:my-6`,
    button3: `rounded-md w-[50%] md:w-[50%] text-center hover:bg-opacity-[0.9] transition duration-[200ms] ${
      WhichNav == "description"
        ? "bg-primary text-gray-50"
        : "bg-[#ffffff] text-primary"
    }    px-4 sm:px-16 md:px-24 lg:px-36 py-2 md:py-4 lg:px-32 text-lg cursor-pointer my-7 md:my-6`,
  };
  return (
    <div className={style.wrapper}>
      {/* ADDING THE NAVIAGATION  */}
      {/* <div className={style.navContainer}>
        <p
          className={style.button1}
          onClick={() => handleNavClick("information")}
        >
          Information
        </p>
        <p className={style.button2} onClick={() => handleNavClick("reviews")}>
          Reviews
        </p>
        <p
          className={style.button3}
          onClick={() => handleNavClick("description")}
        >
          Description
        </p>
      </div> */}
      {/* adding the content */}
      {/* ADDING THE DESCRIPTION */}
      <Description description={description} productName={productName} />

      <Information information={information} productName={productName} />

      <Review reviews={reviews} productName={productName} slug={slug} />
    </div>
  );
};

export default MoreDetails;
