import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [Click, setClick] = useState(false);
  const handleClick = () => {
    setClick(false);
  };
  return (
    <>
      <Head>
        <title key={"title"}>
          Funncart | Market place for handcrafted products
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/fav1.png" type="image/x-icon" />
        <meta
          name="description"
          content="Funncart | Market place for handcrafted products"
        />
      </Head>
      {/* bg-[#f6f6f6] */}
      <div className="overflow-x-hidden  z-0">
        {/* <p
          style={{ fontFamily: "Playfair Display, serif" }}
          className="py-2 text-sm text-center bg-red-800 text-white"
        >
          11.11 Sale Now Active. Limited Time Discounts{" "}
        </p> */}
        {/* <p className="py-1 text-xs text-center bg-primary text-white">
          FREE SHIPPING ON ALL ORDERS RS. 1999 & ABOVE
        </p> */}
        <Navbar click={Click} />
        <AnimatePresence exitBeforeEnter>
          <div
            key={asPath}
            className="z-0 mt-16 md:mt-2"
            onClick={handleClick}
            style={{ fontFamily: "Poppins,serif" }}
          >
            <Component {...pageProps} />
          </div>
          <Footer />
          {/* adding the whatsapp button as CTA */}
          <a
            href="https://wa.me/+923343866227/?text="
            className="fixed p-3 bg-primary rounded-full cursor-pointer fi bottom-4 right-4 text-white"
          >
            <BsWhatsapp className="text-2xl text-white md:text-2xl shake-y-animation" />
          </a>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
