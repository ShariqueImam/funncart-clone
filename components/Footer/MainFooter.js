import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
const style = {
  wrapper:
    "md:my-8 lg:my-12 flex flex-col md:flex-row items-center justify-between mx-auto w-[75%] md:w-[70%] mx-auto",
  suggestion: "md:w-[35%] my-6 text-primary flex flex-col mt-16 items-center",
  center: "md:w-[25%] flex flex-col my-6 ",
  contact: "md:w-[50%] my-6",
  ourAddress: "text-green-800 text-sm md:text-sm text-center",
  contactContent: "text-primary text-sm md:text-md text-center",
  info: "text-primary text-sm md:text-md text-center mt-5",
  heading:
    "text-primary text-md md:text-xl text-center my-6 border-b-2 border-primary max-w-fit mx-auto",

  input:
    "border-2 border-green-600 bg-transparent my-0 px-2 py-3 md:px-2 outline-none border-2 focus:border-[#c8a165] w-[100%] md:w-[65%] ",
  btn: " hover:bg-opacity-[0.9] transition duration-[300ms] my-6 bg-[#c8a165] max-w-fit px-4 md:px-6 py-2 md:py-1 text-green-100 tracking-wide ",
};

const MainFooter = () => {
  const [Seller, setSeller] = useState("");
  const tokenWithWriteAccess =
    "skcCBItUtJgAVMB47KUJ1jSlusnFrqwt9B97VntAuRxZFps97GT0xEj0oTgXx1iKN6cDlwX4ZblmntN1MBbSmY2IaeJZwZ4qSL7uvtlR007GUgQE9Fb7V9k8q0kx3mcBiSixAz6Icg6m4lsfIsZo8aTS14P4WH3AdeWWdvW23CtVBtH0Y7wy";
  const handleSellerChange = (e) => {
    setSeller(e.target.value);
  };
  const handleSendSeller = () => {
    const sendData = async () => {
      const { data } = await axios.post(
        `https://p0ifd5ok.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "seller",
                createdAt: new Date().toISOString(),
                email: Seller,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      setSeller("");
    };
    sendData();
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.contact}>
        <h2 className={style.heading}>Contact Us</h2>
        <h2 className={style.contactContent}>
          Email Us: funncartstore@gmail.com
        </h2>
        <div className="flex items-end justify-end flex-col w-[80%] md:w-[65%] lg:w-[60%]">
          <h2 className={style.contactContent}>Phone: 0334 - 3866227</h2>
          <h2 className={style.contactContent}>(funncart)</h2>
        </div>
      </div>
      <div className="mx-auto max-w-fit flex items-center justify-center flex-col md:w-[40%] mx-auto">
        {/* logo */}
        <img
          src={`/urdulogo.png`}
          alt="Funncart logo"
          width={130}
          height={90}
        />
        <h2 className={style.info}>
          We provide marketplace for handmade products.The products can be
          proudly declared as Pakistani made.
        </h2>
      </div>
      {/* <div className={style.suggestion}>
        <h2 className={style.heading}>Suggestions</h2>
        <input
          name=""
          id=""
          type="email"
          className={style.input}
          placeholder="Enter email"
          value={Seller}
          onChange={handleSellerChange}
        ></input>
        <button className={style.btn} onClick={handleSendSeller}>
          Become a seller
        </button>
      </div> */}
    </div>
  );
};

export default MainFooter;
