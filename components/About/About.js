import React from "react";
import Counter from "./Counter/Counter";
import Header from "../Header/Header";
const style = {
  about: "w-[95%] md:w-[90%] mx-auto flex flex-col items-center justify-center",
  side1: "w-full md:w-[45%] h-full mx-auto",
  side2: "w-full md:w-[45%] flex items-center justify-center mx-auto hidden md:flex",
  heading:
    "font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl my-8 text-primary",
  details: "text-primary py-3 ",
  divider: "border-b-[1px] border-gray-200 p-2",
  coutnerContainer: "",
  signature:
    "my-8 flex justify-around items-center w-[70%] md:w-[60%] mx-auto md:mx-0",
  img: "scale-[0.8]",
  name: "text-xl sm:text-xl md:text-3xl lg:text-3xl italic ",
  signatureImg: "scale-[0.7] md:scale-[0.95]",
};
const About = () => {
  return (
    <div className={style.about}>
      <Header headingText="ABOUT " />
      <div className="flex my-24 mx-auto">
        <div className={style.side1}>
          <h2
            className={style.heading}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We provide marketplace for handmade products
          </h2>
          <p
            className={style.details}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Funncart connect costumers to workmanship of highly capable
            crafters, where they can appreciate the art of handcrafted items.
            The products can be proudly declared as Pakistani made. Mechanized
            products are highly accurate, but they lack the most important
            essence, love. The people who produce such items work for their own
            leisure and put their souls in the product.
          </p>
          <div className={style.divider}></div>
          <div className={style.coutnerContainer}>
            <Counter />
          </div>
          {/* adding the signature */}
        
        </div>
        <div className={style.side2}>
          <img
            src="/img/about.jpg"
            alt=""
            className={style.img}
            style={{ clipPath: "polygon(0 0, 100% 10%, 100% 88%, 1% 100%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
