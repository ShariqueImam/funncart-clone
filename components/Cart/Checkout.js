import React, { useState, useEffect } from "react";
const style = {
  wrapper: " bg-white my-12  w-[90%] md:w-[50%] lg:w-[40%] mx-auto py-4",
  smallHeading:
    "border-b-2 border-primary text-2xl md:text-3xl max-w-fit mx-auto py-2 text-primary font-semibold",
  form: "flex flex-col my-6",
  input:
    "rounded-lg px-3  md:px-4 py-2 md:py-3 placeholder:text-black ring-none outline-none bg-[#F5F4F4] my-4 w-[90%] md:w-[85%] mx-auto",
  btn: "bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-red-400 mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-800 font-bold tracking-wide",
};
const Checkout = (props) => {
  const [isError, setError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const handleNameChange = (e) => {
    props.checkoutData({ Name: e.target.value,Email,PhoneNumber,City,Address });
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
	props.checkoutData({ Name,Email:e.target.value,PhoneNumber,City,Address });
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
	props.checkoutData({ Name,Email,PhoneNumber:e.target.value,City,Address });
    setPhoneNumber(e.target.value);
  };
  const handleCityChange = (e) => {
	props.checkoutData({ Name,Email,PhoneNumber,City: e.target.value,Address });
    setCity(e.target.value);
  };
  const handleAddressChange = (e) => {
	props.checkoutData({ Name,Email,PhoneNumber,City,Address: e.target.value });
    setAddress(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const sendData = async () => {
      // send the data to the database
      setIsSubmit(true);
      // to represent the success message
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
  };

  return (
    <div className={style.wrapper}>
      <h2
        className={style.smallHeading}
      >
        Billing Details
      </h2>
      <form className={style.form} onSubmit={submitHandler}>
        <input
          type="text"
          className={style.input}
          placeholder="Your Name here..."
          value={Name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          className={style.input}
          placeholder="Your Email here... "
          value={Email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your Phone here... "
          value={PhoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your City here... "
          value={City}
          onChange={handleCityChange}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your Address here... "
          value={Address}
          onChange={handleAddressChange}
        />
      </form>
    </div>
  );
};

export default Checkout;
