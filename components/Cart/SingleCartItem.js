import React from "react";
import { ImCross } from "react-icons/im";
import Image from "next/image";

const style = {
  wrapper: "flex my-6 items-center justify-around text-xs md:text-lg",
  nameContainer: "flex items-center justify-center w-[20%]",
  item: "w-[20%] flex items-center justify-center",
  name: " text-sm ml-2",
};
const SingleCartItem = (props) => {
//   console.log(props.item);
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato, sans-serif" }}>
      <div className={style.nameContainer}>
        <div className={style.img}>
          <Image src={`${props.item.image}`} height={70} width={70} />
        </div>
        <div className={style.name}>{props.item.name}</div>
      </div>
      <div className={style.item}>{props.item.price}</div>
      <div className={style.item}>{props.item.quantity}</div>
      <div className={style.item}>{props.item.price * props.item.quantity}</div>
      {/* passing the item slug to remove from the local storage */}
      <div
        className={style.item}
        onClick={() => props.handleRemove(props.item.slug)}
      >
        <ImCross className="transition-all duration-[300ms] text-stone-700 cursor-pointer hover:bg-stone-300 text-3xl p-2 rounded-full" />
      </div>
    </div>
  );
};

export default SingleCartItem;
