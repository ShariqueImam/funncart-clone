import React from "react";
import Animator from "../../components/UI/Animator";
import Header from "../../components/Header/Header1";
import SellerForm from "../../components/Seller/SellerForm";
const style = {
  wrapper: "font",
  sellerTextContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
  sellerHeading:
    "border-b-2 border-primary text-2xl md:text-3xl max-w-fit mx-auto py-2 text-primary my-8 md:my-10 font-semibold",
  sellerPara: "text-primary py-2 md:py-3 px-4 md:px-6",
  sellerFormContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
};
const index = () => {
  return (
    <Animator>
      <Header headingText={"Become a seller"} />
      <div className={style.sellerTextContainer}>
        <h2
          className={style.sellerHeading}
        >
          About becoming a seller
        </h2>
        <p
          className={style.sellerPara}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Do you want to be a part of something grand? Are you an artist and
          looking for recognition and want to target a wider range of audience?
          Here we promote local producers. We provide with the best marketing
          that your product needs at agreeable terms. 
        </p>
        <p
          className={style.sellerPara}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          We have 5000+ monthly
          potential customers, who are waiting to be pleased by your art.  Please fill the form below and we will reach you.
        </p>
      </div>

      {/* adding the seller form */}
      <div className={style.sellerFormContainer}>
        <SellerForm />
      </div>
    </Animator>
  );
};

export default index;
