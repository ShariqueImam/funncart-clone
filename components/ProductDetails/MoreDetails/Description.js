import React from "react";

const style = {
  wrapper: "flex flex-col justify-start  bg-[#ffffff] px-5 sm:px-6 md:px-8 lg:px-12  py-5 sm:py-6 md:py-8 lg:py-12",
  para: "text-black my-3 w-[95%] md:w-[85%]",
  name: "text-2xl md:text-3xl lg:text-4xl text-primary font-bold",
};
const Description = ({ description, productName }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.name}>{productName}</h2>
      <p className={style.para}>{description}</p>
    </div>
  );
};

export default Description;
