import React, { useState } from "react";

const style = {
  wrapper:
    "flex bg-[#f6f6f6] max-w-fit px-3 py-3 my-5 items-center justify-center mt-9 md:mt-7 mx-auto md:mx-0 rounded-md",
  value:
    "border-l-[1px] border-r-[1px] border-primary px-5 md:px-10 cursor-pointer text-primary font-bold",
  value1: "px-5 px-10 cursor-pointer text-lg text-primary font-bold",
};

const ItemCount = (props) => {
  const [Value, setValue] = useState(1);
  const handleDecrement = () => {
    Value > 1 && setValue((prev) => prev - 1);
  };
  const handleIncrement = () => {
    Value < 3 && setValue((prev) => prev + 1);
  };
  props.itemCount(Value);
  return (
    <div className={style.wrapper}>
      <p className={style.value1} onClick={handleDecrement}>
        -
      </p>
      <p className={style.value}>{Value}</p>
      <p className={style.value1} onClick={handleIncrement}>
        +
      </p>
    </div>
  );
};

export default ItemCount;
