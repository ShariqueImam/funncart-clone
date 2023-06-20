import React, { useState, useEffect } from "react";

const CustomCategory = (props) => {
  const style = {
    wrapper: ` px-2 flex items-center mt-9 md:mt-7 ${
      props.categoryMainTitle
        ? ""
        : "cursor-not-allowed px-2 max-w-fit opacity-[0.2]"
    }`,
    para: `text-green-800 text-md font-bold `,
    sizeContainer: "flex ml-6 flex-wrap" ,
  };
  const [SelectedCategory, setSelectedCategory] = useState(
    props.customCategoryData && props.customCategoryData[0].categoryTitle
  );

  const handleCategoryClick = (data) => {
    setSelectedCategory(data);
  };
  useEffect(() => {
    let result =
      props.customCategoryData &&
      props.customCategoryData.filter((obj) => {
        return obj.categoryTitle == SelectedCategory;
      });
    props.selectedCategory(result);
  }, [SelectedCategory]);
  // console.log(props.customCategoryData)
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      <p className={style.para}>{props.categoryMainTitle}</p>
      <div className={style.sizeContainer}>
        {props.customCategoryData &&
          props.customCategoryData.map((singleCategory) => {
            return (
              <p
                className={` ${
                  singleCategory.categoryTitle == SelectedCategory
                    ? "bg-green-700 text-white"
                    : "text-green-900"
                } mx-0 md:mx-3 px-4 py-2 cursor-pointer ${
                  props.categoryMainTitle ? "" : "cursor-not-allowed "
                }`}
                onClick={() =>
                  handleCategoryClick(singleCategory.categoryTitle)
                }
              >
                {singleCategory.categoryTitle}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default CustomCategory;
