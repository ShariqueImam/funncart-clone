import React from "react";
import useWindowSize from "../../hooks/windowSize";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
const Navbar = () => {
  const style = {
    navDrawer: "flex sm:hidden items-center justify-between ",
    wrapper: " text-gray-200 w-[100%] lg:w-[100%]  z-10 fixed bg-white",
    mainNav: "flex items-center justify-between py-1 hidden sm:flex",
    list: "list-none cursor-pointer   text-primary font-semibold md:mx-4 hover:opacity-[0.8]",
    navContainer: "flex items-center justify-center",
    cartButton:
      "flex items-center justify-center mx-5 bg-primary px-3 py-1 rounded",
    img: "mx-12 cursor-pointer",
  };

  return (
    // install the mui first
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <Link  href="/">
          <div className={style.img}>
            <Image src={"/logo1.png"} height={50} width={50} />
          </div>
          {/* <img src={""} height={1} width={1} /> */}
        </Link>
        <div className="flex items-center justify-center">
          <div className={style.navContainer}>
            <Link href="/">
              <li className={style.list}>HOME</li>
            </Link>
            <Link href="/products">
              <li className={style.list}>PRODUCTS</li>
            </Link>
            <Link href="/about">
              <li className={style.list}>ABOUT US</li>
            </Link>
            <Link href="/contact">
              <li className={style.list}>CONTACT</li>
            </Link>
            <Link href="/seller">
              <li className={style.list}>SELLER</li>
            </Link>
          </div>
          <Link href="/cart">
            <button className={style.cartButton}>
              <h2>CART</h2>
              <AiOutlineShoppingCart className="text-2xl md:text-xl text-white mx-2" />
            </button>
          </Link>
        </div>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer />
      </div>
    </div>
  );
};

export default Navbar;
