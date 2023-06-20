import React from "react";
import styled from "styled-components";
import useWindowSize from "../../../hooks/windowSize";
const BgImgDdesktop =
  "https://res.cloudinary.com/shariqcloud/image/upload/v1648753565/Quality%20Homes/Overlay/Add_a_heading_xcu8bx.jpg";

const BgImgMobile =
  "https://res.cloudinary.com/shariqcloud/image/upload/v1648819825/Quality%20Homes/Overlay/DISCOVER_OUR_HOMES_zypjzd.jpg";
const BgImgTab =
  "https://res.cloudinary.com/shariqcloud/image/upload/v1648819417/Quality%20Homes/Overlay/DISCOVER_OUR_HOMES_ung1jx.jpg";
  
  const style = {
    wrapper:

    "mt-12 scale-y-[1.3] md:scale-[0.8] md:hover:scale-[0.7] transition duration-[300ms]",
  };
  const Overlay = () => {
  
    const {width} = useWindowSize();
    const OverlayBackground = styled.div`
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      url(${(width < 500 && BgImgMobile) ||
      (width > 500 && width < 800 && BgImgTab) ||
      (width > 800 && BgImgDdesktop)});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: auto;
    width: 100vw;
    height: 70vh;
  `;
  return (
    // <Slide bottom>
    <OverlayBackground className={style.wrapper}></OverlayBackground>
    // </Slide>
  );
};

export default Overlay;
