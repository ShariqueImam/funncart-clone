import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import Nav from "../components/Navbar/Nav";
import Cart from "../components/Cart/Cart";
import Cookies from "js-cookie";
function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [CartClick, setCartClick] = useState(false);
  const handleCartClick = () => {
    // setCartClick(true);
  };

  return (
    <>
      <div className="overflow-y-hidden overflow-x-hidden  z-0">
        <AnimatePresence exitBeforeEnter>
          <div key={asPath}>
            <Cart CartClick={true} />
            <Nav handleCartClick={handleCartClick} />
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
// export async function getServerSideProps() {
//   return;
// }
