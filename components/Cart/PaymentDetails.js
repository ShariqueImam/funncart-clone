import React, { useState } from "react";

const style = {
  wrapper: "flex flex-col py-4 rounded",
  smallHeading:
    "border-b-2 border-primary text-2xl md:text-3xl max-w-fit mx-auto py-2 text-primary font-semibold",
  btn: "rounded bg-opacity-[1] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-primary mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-50 font-bold tracking-wide",
  subtotal: " text-primary flex w-[75%] md:w-[50%] mx-auto my-6 ",
  para: "  flex-1",
  amount: "",
  orderTotal:
    "text-red-400 w-[75%] md:w-[50%] mx-auto my-6 font-normal flex border-t-[2px] border-primary py-3",
  input:
    " border-b-2 border-primary outline-none ring-none w-[30%] placeholder:text-xs",
  promoContainer:
    "rounded flex items-center justify-between w-[75%] md:w-[50%] mx-auto my-6 text-black ",
  onlinePayment:
    "flex flex-col items-center justify-center w-[75%] md:w-[80%] mx-auto my-6 text-black ",
  oninePaymentDetailsContainer:
    "flex flex-col items-center justify-between w-[75%] md:w-[100%]",
  singlePaymentMethod:
    "flex flex-row md:flex-col items-center justify-around my-4",
  onlinePaymentNumber: "text-primary my-2",
};
const PaymentDetails = (props) => {
  const [PayOnline, setPayOnline] = useState("COD");
  const payOnlineClickHandler = (e) => {
    setPayOnline(e.target.value);
  };
  const [Promo, setPromo] = useState("");
  const handlePromoChange = (e) => {
    setPromo(e.target.value);
  };
  const handleApplyPromo = () => {
    if (Promo === "NEW10") {
      if (props.total.toFixed(1) * 0.1 < 500) {
        props.handleTotal(10);
      } else {
        props.handleTotal(500);
      }
    }
    if (Promo === "NEW20") {
      if (props.total.toFixed(1) * 0.2 < 500) {
        props.handleTotal(20);
      } else {
        props.handleTotal(500);
      }
    }
    if (Promo === "NUSTIAN" || Promo === "Nustian" || Promo === "nustian") {
      if (props.total.toFixed(1) * 0.15 < 500) {
        props.handleTotal(15);
      } else {
        props.handleTotal(500);
      }
    }
    if (Promo === "FUNNCART10") {
      if (props.total.toFixed(1) * 0.1 < 500) {
        props.handleTotal(10);
      } else {
        props.handleTotal(500);
      }
    }
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className={style.smallHeading}>Payment Details</h2>
      <div
        className={style.subtotal}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <p className={style.para}>Cart Subtotal </p>
        <p className={style.amount}>Rs. {Math.round(props.total)}</p>
      </div>
      <div className={style.subtotal}>
        <p className={style.para}>Shipping Fee</p>
        {props.total > 2998 ? (
          <p className={style.amount}>Free</p>
        ) : (
          <p className={style.amount}>+ Rs 199</p>
        )}
      </div>
      <form
        className={style.promoContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* <p className={style.para}>Promo Code</p> */}
        <input
          className={style.input}
          placeholder="Promo..."
          value={Promo}
          onChange={handlePromoChange}
        />
        <button
          onClick={handleApplyPromo}
          className="px-4 py-2 bg-primary bg-opacity-[1] hover:bg-opacity-[0.9] text-white text-xs rounded"
        >
          ADD
        </button>
        {/* adding the online payment option */}
      </form>
      <div className={style.onlinePayment}>
        <section className="flex flex w-[75%] md:w-[50%] mx-auto my-3">
          <input
            type="radio"
            id="COD"
            value="COD"
            onChange={payOnlineClickHandler}
            checked={PayOnline == "COD" ? true : false}
            className="mx-8 flex "
          />
          <label htmlFor="COD">Cash on Delivery</label>
        </section>
        <section className="flex flex w-[75%] md:w-[50%] mx-auto my-3">
          <input
            type="radio"
            id="online"
            value="online"
            checked={PayOnline == "online" ? true : false}
            className="mx-8"
            onChange={payOnlineClickHandler}
          />
          <label htmlFor="online">Online Payment</label>
        </section>

        {/* showing the online payment details */}
        {PayOnline == "online" && (
          <div className={style.oninePaymentDetailsContainer}>
            <div className={style.singlePaymentMethod}>
              <img src="/abl.png" alt="" width={120} height={60} />
              <p className={style.onlinePaymentNumber}>04190010063543230010</p>
            </div>
            <div className={style.singlePaymentMethod}>
              <img src="/easy.png" alt="" width={70} height={60} />
              <p className={style.onlinePaymentNumber}>0334-3866227</p>
            </div>
            <div className={style.singlePaymentMethod}>
              <img src="/jazz.jpeg" alt="" width={70} height={60} />
              <p className={style.onlinePaymentNumber}>0334-3866227</p>
            </div>
          </div>
        )}
      </div>

      {/* ADDING THE ORDER TOTAL */}
      <div
        className={style.orderTotal}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <p className={style.para}>Order Total </p>
        {props.total > 2998  ? (
          <p className={style.amount}>Rs. {Math.round(+props.total)}</p>
        ) : (
          <p className={style.amount}>Rs. {Math.round(+props.total + 199)}</p>
        )}
      </div>
      {props.DetailsError && (
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[75%] md:w-[50%] mx-auto bg-red-600 text-white px-3 py-1 tracking-wide rounded"
        >
          *Please fill billing details
        </p>
      )}

      <button className={style.btn} onClick={props.placeOrder}>
        {PayOnline == "online" ? "Paid and Place Order" : "Place Order"}
      </button>
    </div>
  );
};

export default PaymentDetails;
