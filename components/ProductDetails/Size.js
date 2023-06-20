import React, { useState, useEffect } from "react";

const Size = (props) => {
  // props.categoryData WILL CONTAIN THE ARRAY OF OBJECTS
  const style = {
    wrapper: `flex items-center mt-9 md:mt-9 ${"px-2 max-w-fit "} rounded-md`,
    para: `text-primary text-md font-bold `,
    sizeContainer: "flex ml-6 flex-wrap",
  };
  const [Size, setSize] = useState(
    props.categoryData
      ? props.categoryData[0].categorySizeTitle
      : props.sizeData && props.sizeData[0].singleSize
  );
  const [Price, setPrice] = useState("");
  // color is an array of colors with hex codes
  const handleClick = (arr) => {
    setSize(arr[0]);
    setPrice(arr[1]);
  };
  useEffect(() => {
    props.getSize(Size);
    props.getPrice(Price);
  }, [Size]);

  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      {( props.sizeData) && (
        <p className={style.para}>Size</p>
      )}
      <div className={style.sizeContainer}>
        {props.categoryData && props.categoryData.length > 0
          ? props.categoryData.map((i) => {
              return (
                <p
                  className={`${
                    Size == i.categorySizeTitle &&
                    "flex items-center justify-center bg-primarytext-white "
                  } mx-3 px-4 py-2 cursor-pointer text-gray-800 my-2 w-[20%] md:w-auto text-center rounded-md`}
                  onClick={() =>
                    handleClick([i.categorySizeTitle, i.categorySizePrice])
                  }
                >
                  {i.categorySizeTitle}
                </p>
              );
            })
          : props.sizeData &&
            // props.sizeData.length > 0 &&
            props.sizeData.map((i) => {
              return (
                <p
                  className={`${
                    Size == i.singleSize &&
                    "flex items-center justify-center bg-green-700 text-white "
                  } mx-3 px-4 py-2 cursor-pointer text-green-800 my-2 w-[20%] md:w-auto text-center`}
                  onClick={() => handleClick([i.singleSize, i.singlePrice])}
                >
                  {i.singleSize}
                </p>
              );
            })}
      </div>
    </div>
  );
};

export default Size;

// props.color &&
//       props.color.map((i) => {
//         return (
//           <p
//             className={`${
//               Size == "S" &&
//               "flex items-center justify-center bg-green-700 text-white "
//             } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%]`}
//             onClick={() => handleClick()}
//           ></p>
//         );
//       }
