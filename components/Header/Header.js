import React from "react";
// imprt header.webp
import Link from "next/link";
const style = {
  wrapper: "h-[40vh] w-[100vw] flex items-center justify-center flex flex-col",
  smallHeading: "text-4xl md:text-6xl text-primary tracking-wider my-12 text-center",
  pagination: "flex flex-row",
  pagi: "text-lg md:text-md text-primary mx-1 cursor-pointer",
};
const Header = ({ headingText }) => {
  return (  
    // will take the text as the argument
    <div
      className={style.wrapper}
      // style={{
      //   background:
      //     'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url("/img/header.webp")',
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "auto",
      // }}
    >
      <h2
        className={style.smallHeading}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {headingText}
      </h2>
      {/* adding the pagination */}
      <div
        className={style.pagination}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Link href="/">
          <h2 className={style.pagi}>Home / </h2>
        </Link>
        <h2 className={style.pagi}>{headingText.toLowerCase()} </h2>
      </div>
    </div>
  );
};

export default Header;
