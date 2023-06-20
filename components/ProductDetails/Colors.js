import React, { useState, useEffect } from "react";

const style = {
  wrapper: `mx-2 flex items-center mt-6 text-green-800`,
  para: `text-green-800 text-md font-bold `,

  heading: `text-green-800 text-md font-bold `,
  sizeContainer: "flex ml-6",
};
const Colors = (props) => {
  const [Color, setColor] = useState("");

  const handleClick = (color) => {
    setColor(color);
  };
  useEffect(() => {
    props.getColor(Color);
  }, [Color]);
  // console.log(props.categoryColors[0]);
  // console.log(props.categoryColors[0] && props.categoryColors[0]);
  // console.log(Color);
  useEffect(() => {
    if (props.categoryColors) {
      setColor(props.categoryColors[0]);
    } else if (props.color) {
      setColor(props.color[0]);
    }
  }, [props.categoryColors, props.color]);
  return (
    <div className={style.wrapper}>
      {(props.categoryColors || props.color) && (
        <p className={style.para}>Color</p>
      )}{" "}
      <div className={style.sizeContainer}>
        {props.categoryColors && props.categoryColors.length > 0
          ? props.categoryColors.map((i) => {
              return (
                <div
                  className={`h-[2vh] w-[5vw] md:w-[1.2vw] mx-2 ${
                    Color == i &&
                    "border-2  p-2 scale-[1.2] ring-2 ring-green-700"
                  }`}
                  style={{ backgroundColor: i }}
                  onClick={() => handleClick(i)}
                ></div>
              );
            })
          : props.color &&
            props.color.map((i) => {
              return (
                <div
                  className={`h-[2vh] w-[5vw] md:w-[1.2vw] mx-2 ${
                    Color == i &&
                    "border-2  p-2 scale-[1.2] ring-2 ring-green-700"
                  }`}
                  style={{ backgroundColor: i }}
                  onClick={() => handleClick(i)}
                ></div>
              );
            })}
      </div>
    </div>
  );
};

export default Colors;
