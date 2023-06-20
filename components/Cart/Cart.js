import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SingleCartItem from "./SingleCartItem";
import PaymentDetails from "./PaymentDetails";
import Checkout from "./Checkout";
import axios from "axios";
import { useRouter } from "next/router";
const style = {
  wrapper: " pb-8",
  cartNav: "flex w-[98%] md:w-[70%] lg:w-[55%] mx-auto justify-around",
  nav1: "px-6 md:px-12 py-4 md:py-6 bg-primary text-stone-50 font-bold tracking-wide w-[45%] flex items-center justify-center cursor-pointer hover:bg-opacity-[0.85] transition-all duration-[350ms] my-8 text-xs md:text-sm rounded-sm",
  itemsContainer:
    "bg-white px-4 md:px-6 py-6 md:py-8 w-[95%] lg:w-[85%] mx-auto",
  itemsNav: " bg-primary flex text-white py-2 items-center justify-around rounded-md",
  para: " text-center w-[20%] text-xs md:text-sm ",
  singleItemListContainer: "flex flex-col",
  paymentDetails: "my-12 bg-white w-[90%] md:w-[50%] lg:w-[40%] mx-auto",
  btn: "bg-opacity-[1] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-[#c8a165] mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-50 font-bold tracking-wide",
};

const Cart = () => {
  const router = useRouter();
  const [menu, setMenu] = useState("shoppingcart");
  const [CartItems, setCartItems] = useState([]);
  const [Total, setTotal] = useState(0);
  const [Apply, setApply] = useState(false);
  const [IsSubmit, setIsSubmit] = useState(false);
  const [CheckoutData, setCheckoutData] = useState([]);
  const [DetailsError, setDetailsError] = useState(false);
  const tokenWithWriteAccess =
    "skcCBItUtJgAVMB47KUJ1jSlusnFrqwt9B97VntAuRxZFps97GT0xEj0oTgXx1iKN6cDlwX4ZblmntN1MBbSmY2IaeJZwZ4qSL7uvtlR007GUgQE9Fb7V9k8q0kx3mcBiSixAz6Icg6m4lsfIsZo8aTS14P4WH3AdeWWdvW23CtVBtH0Y7wy";
  const handleMenuClick = (value) => {
    setMenu(value);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(localStorage.getItem("cart"));
      // console.log(Total);
      if (localStorage.getItem("cart")) {
        const data = JSON.parse(localStorage.getItem("cart"));
        let sum = 0;
        for (let r of data) {
          sum += +r.total;
        }
        setTotal(sum);
      }
    }
  }, [CartItems]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        setCartItems(JSON.parse(localStorage.getItem("cart")));
      }
    }
  }, []);

  const handleRemove = (value) => {
    // value contain the slug of the removed item
    let arr = CartItems.filter((r) => r.slug !== value);
    localStorage.setItem("cart", JSON.stringify(arr));
    setCartItems(arr);
  };
  const handleTotal = (value) => {
    if (value == 15 && !Apply) {
      setApply(true);
      setTotal((prev) => prev * 0.85);
    }
    if (value == 20 && !Apply) {
      setApply(true);
      setTotal((prev) => prev * 0.8);
    }
    if (value == 500 && !Apply) {
      setApply(true);
      setTotal((prev) => prev - 500);
    }
  };
  const handleCheckoutData = (data) => {
    setCheckoutData(data);
  };
  // console.log(CartItems);
  const handlePlaceOrder = () => {
    const sendData = async () => {
      setIsSubmit(true);
      let orderItems = [];
      for (let i of CartItems) {
        // orderItems = [
        //   ...orderItems,
        //   `Ordered: ${i.slug} Qty:${i.quantity} Color : ${i.color && i.color} ${
        //     i.categoryMainTitle && i.categoryMainTitle
        //   } : ${i.category && i.category[0].categoryTitle}  AND ${
        //     i.categoryMainTitle1 && i.categoryMainTitle1
        //   } : ${i.category1 && i.category1[0].categoryTitle} `,
        // ];
        orderItems = [
          ...orderItems,
          `Ordered: ${i.slug} Qty:${i.quantity} Color : ${i.color && i.color} ${
            i.categoryMainTitle && i.categoryMainTitle
          } : ${i.category && i.category[0].categoryTitle}  AND Size : ${
            i.size
          } `,
        ];
      }
      if (CartItems.length > 0) {
        const { data } = await axios.post(
          `https://p0ifd5ok.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
          {
            mutations: [
              {
                create: {
                  _type: "order",
                  createdAt: new Date().toISOString(),
                  name: CheckoutData.Name,
                  email: CheckoutData.Email,
                  phoneNumber: CheckoutData.PhoneNumber,
                  city: CheckoutData.City,
                  address: CheckoutData.Address,
                  order: [...orderItems],
                  // total: `${Total} + Rs199 (Shipping Fee)`,
                  total:
                    Total >= 2998
                      ? `${Total} + Free Shipping`
                      : `${Total} + Rs199 (Shipping Fee)`,
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
        let mailContent = [
          orderItems,
          CheckoutData.Name,
          CheckoutData.PhoneNumber,
        ];
        fetch("/api/email", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailContent),
        }).then(() => {
          console.log("EMAIL sent");
        });
        router.push("/thanks");
      }
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    if (
      CheckoutData.Name &&
      CheckoutData.Email &&
      CheckoutData.PhoneNumber &&
      CheckoutData.City &&
      CheckoutData.Address
    ) {
      sendData();
    } else {
      setDetailsError(true);
    }
    setTimeout(() => {
      setDetailsError(false);
    }, 2000);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  return (
    <div className={style.wrapper}>
      <Header headingText="CART" />
      {/* adding the items container */}
      <div className={style.itemsContainer}>
        {/* nav */}
        <div
          className={style.itemsNav}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <p className={style.para}>PRODUCT</p>
          <p className={style.para}>PRICE</p>
          <p className={style.para}>QUANTITY</p>
          <p className={style.para}>TOTAL</p>
          <p className={style.para}>REMOVE</p>
        </div>
        {/* mapping the items-list */}
        <div className={style.singleItemListContainer}>
          {CartItems && CartItems.length > 0 ? (
            CartItems.map((r) => {
              return (
                <SingleCartItem
                  item={r}
                  key={r.name}
                  handleRemove={handleRemove}
                />
              );
            })
          ) : (
            <div className=" text-xl md:text-2xl text-center my-24 text-primary font-bold">
              Cart Empty
            </div>
          )}
        </div>
      </div>
      <Checkout checkoutData={handleCheckoutData} />

      <div className={style.paymentDetails}>
        <PaymentDetails
          total={Total}
          handleTotal={handleTotal}
          placeOrder={handlePlaceOrder}
          DetailsError={DetailsError}
        />
      </div>
    </div>
  );
};

export default Cart;
