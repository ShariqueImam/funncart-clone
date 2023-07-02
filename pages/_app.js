import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
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
      <div className="overflow-y-hidden overflow-x-hidden  z-0">
        <AnimatePresence exitBeforeEnter>
          <div
            key={asPath}
            className="z-0 mt-16 md:mt-2"
            onClick={handleClick}
            style={{ fontFamily: "Poppins,serif" }}
          >
            <Component {...pageProps} />
            <Footer />
          </div>

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
