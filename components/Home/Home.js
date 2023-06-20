import React, { useState } from "react";
import useWindowSize from "../../hooks/windowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Info from "./Info/Info";
import HomeCategories from "./HomeCategories/HomeCategories";
import Link from "next/link";
import Sellers from "./Sellers/Sellers";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-5xl md:text-7xl text-secondary  my-2 md:my-3 w-[100%] md:w-[40%] text-center md:text-left font-semibold",
  para: "tracking-wider text-secondary text-lg md:text-xl my-3 md:my-8 text-center md:text-left",
  btn: "rounded-md px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  btnContainer:
    "rounded-md my-2 flex items-center justify-start bg-secondary hover:bg-primary hover:text-secondary text-primary w-[80%] md:w-[20%] px-4",
  arrow: `text-xl`,
  mainContent:
    "w-[90%] md:w-[80%] mx-auto flex flex-col items-center md:items-start ",
  right:
    "flex flex-col my-0 md:my-36 lg:my-36 px-4 md:mt-12 md:mt-2 md:ml-12 items-center md:items-start",
  main1: "flex flex-col md:flex-row mx-auto w-[100%]",
  left: "flex items-center justify-center",
  left1: "flex items-center justify-center scale-[0.8]",
};

const Home = ({}) => {
  const { width } = useWindowSize();
  const [MouseEnter, setMouseEnter] = useState(false);
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(width < 500 && "/b.jpg") ||
      (width > 500 && width < 1000 && "/b.jpg") ||
      (width > 1000 && "/b.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 90vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: start;
  `;
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1>
        <div className={style.mainContent}>
          <h2 className={style.heading}>A Marketplace for handcrafted products</h2>
          <p className={style.para}>Free shipping on orders above Rs.2999</p>
          <Link href="/products">
            <div className={style.btnContainer}>
              <button className={style.btn}>SHOP NOW</button>
              <AiOutlineArrowRight className={style.arrow} />
            </div>
          </Link>
        </div>
      </FeaturedBackground1>
      <FeaturedProducts />
      <HomeCategories />
      <Sellers />
      <Info />
    </div>
  );
};

export default Home;
