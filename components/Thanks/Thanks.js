import React from "react";
import Header1 from "../Header/Header1";
import Link from "next/link";
const style = {
  wrapper: "bg-[#eeeeee]",
  btn:'bg-green-800 px-8 md:px-12 py-3 md:py-3 text-white mx-auto my-12 hover:bg-opacity-[0.9] transition duration-[300ms]'
};
const Thanks = () => {
    // asd
  return (
    <div className={style.wrapper}>
      <Header1 headingText="Thanks for Shopping" />
      {/* order details */}
      <Link href="/products">
        <div className="flex flex-col items-center justify-center">
          <p className="text-green-900 text-center text-lg  my-4">
            Your order has been placed. Our team will contact you soon.
          </p>
          <button className={style.btn}>Continue Shopping</button>
        </div>
      </Link>
    </div>
  );
};

export default Thanks;
