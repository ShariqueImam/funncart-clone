import React, { useState, useEffect } from "react";
import axios from "axios";
const style = {
  wrapper: "font",
  smallHeading:
    "border-b-2 border-primary text-2xl md:text-3xl max-w-fit mx-auto py-2 text-primary my-8 md:my-10 font-semibold",
  formContainer: "flex flex-col",
  input:
    "px-3 md:px-4 py-2 md:py-3 placeholder:text-gray-900 ring-none outline-none bg-[#F5F4F4] my-4 w-[90%] md:w-[85%] mx-auto",
  btn: "text-white bg-opacity-[1] hover:bg-opacity-[0.9] transition duration-[300ms] my-6 bg-primary mx-auto px-8 md:px-12 py-2 md:py-3 font-bold tracking-wide",
};

const SellerForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [City, setCity] = useState("");
  const [Email, setEmail] = useState("");
  const [Products, setProducts] = useState("");
  const tokenWithWriteAccess =
    "skcCBItUtJgAVMB47KUJ1jSlusnFrqwt9B97VntAuRxZFps97GT0xEj0oTgXx1iKN6cDlwX4ZblmntN1MBbSmY2IaeJZwZ4qSL7uvtlR007GUgQE9Fb7V9k8q0kx3mcBiSixAz6Icg6m4lsfIsZo8aTS14P4WH3AdeWWdvW23CtVBtH0Y7wy";
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const productsChangeHandler = (e) => {
    setProducts(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const sendData = async () => {
      setIsSubmit(true);
      const { data } = await axios.post(
        `https://p0ifd5ok.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "seller",
                createdAt: new Date().toISOString(),
                name: Name,
                phoneNumber: PhoneNumber,
                city: City,
                email: Email,
                products: Products,
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
      // to represent the success message
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    sendData();
    setName("");
    setPhoneNumber("");
    setEmail("");
    setCity("");
    setProducts("");
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.smallHeading}>Enter your details</h2>
      <form
        className={style.formContainer}
        onSubmit={submitHandler}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <input
          type="text"
          className={style.input}
          placeholder="Your Name here..."
          value={Name}
          onChange={nameChangeHandler}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your Phone Number here..."
          value={PhoneNumber}
          onChange={phoneNumberChangeHandler}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your City here..."
          value={City}
          onChange={cityChangeHandler}
        />
        <input
          type="email"
          className={style.input}
          placeholder="Your Email here... "
          value={Email}
          onChange={emailChangeHandler}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your Products here... "
          value={Products}
          onChange={productsChangeHandler}
        />

        <button className={style.btn}>Send Details</button>
      </form>
    </div>
  );
};

export default SellerForm;
