import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "../../hooks/windowSize";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavDrawer = () => {
  const { width } = useWindowSize();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(255, 255, 255)",
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          className="h-[60vh] font flex flex-col my-12"
          style={{ fontFamily: "Poppins, serif" }}
        >
          <div className="flex items-center justify-center">
            <img src={"/logo1.png"} height={40} width={100} />
          </div>
          {/* <h2 className="mx-auto my-16">LOGO</h2> */}
          {/* adding the navs */}
          <div className="flex  flex-col mt-48">
            <Link href="/">
              <h2 className="text-primary font font-semibold mx-4 my-2 cursor-pointer">
                HOME
              </h2>
            </Link>

            <Link href="/products">
              <h2 className="text-primary font font-semibold mx-4 my-2 cursor-pointer">
                PRODUCTS
              </h2>
            </Link>
            <Link href="/about">
              <h2 className="text-primary font font-semibold mx-4 my-2 cursor-pointer">
                ABOUT US
              </h2>
            </Link>

            <Link href="/seller">
              <h2 className="text-primary font font-semibold mx-4 my-2 cursor-pointer">
                SELLER
              </h2>
            </Link>
          </div>
          <Link href="/cart">
            <button className="mx-auto bg-primary text-white px-12 py-1 mt-8 mb-3 w-[90%] cursor-pointer hover:opacity-[0.9]">
              VIEW CART
            </button>
          </Link>
          <Link href="/contact">
            <button className="mx-auto bg-primary text-white px-12 py-1 my-2 w-[90%] cursor-pointer hover:opacity-[0.9]">
              CONTACT
            </button>
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="p-2 my-1 flex items-center justify-between w-[100vw]">
            <div className="w-[15%]" onClick={toggleDrawer(anchor, true)}>
              <svg
                viewBox="0 0 100 80"
                width="30"
                height="20"
                style={{ fill: "rgb(30,41,59)" }}
              >
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </div>
            <div>
              <Image src={"/logo1.png"} height={35} width={35} />
              {/* <p className="w-[70%]">logo</p> */}
            </div>
            <Link href="/cart">
              <button className="flex items-center justify-end mx-0  px-1 py-1 text-xs w-[15%]">
                <AiOutlineShoppingCart className="text-2xl md:text-xl text-primary mx-2" />
              </button>
            </Link>
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop={false}
              style={{
                zIndex: 20,
              }}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
