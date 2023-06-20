import React from "react";
const style = {
  wrapper: "flex flex-col justify-start bg-[#ffffff] px-5 sm:px-6 md:px-8 lg:px-12  py-5 sm:py-6 md:py-8 lg:py-12",
  para: "text-primary my-3 w-[95%] md:w-[85%]",
  name: "text-xl md:text-2xl lg:text-4xl text-primary font-bold",
};
const Information = ({ information, productName }) => {
  return (
    <div className={style.wrapper}>
      {/* adding the para 1 */}
      <h2 className={style.name}>Specifications</h2>
      <p className={style.para}>{information[0]}</p>
      <p className={style.para}>{information[1]}</p>
      <p className={style.para}>{information[2]}</p>
    </div>
  );
};

export default Information;
