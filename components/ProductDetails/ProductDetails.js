import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { urlForThumbnail } from "../../pages/api/image";
import MoreDetails from "./MoreDetails/MoreDetails";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ItemCount from "./ItemCount";
import Animator from "../../components/UI/Animator";
import Colors from "./Colors";
import Size from "./Size";
import CustomCategory from "./CustomCategory";
import useWindowSize from "../../hooks/windowSize";
import Link from "next/link";
import SimilarProducts from "./SimilarProducts";
const ProductDetails = ({
  productName,
  category,
  price,
  description,
  information,
  reviews,
  slugValue,
  image,
  rating,
  size,
  color,
  categoryMainTitle,
  customCategoryData,
  categoryMainTitle1,
  customCategoryData1,
  images, // it will contain the array of images for multiple
  stock,
  discount,
  categoryColors, //array of colors for every category
}) => {
  const style = {
    wrapper:
      "w-[95%] md:w-[80%] lg:w-[65%] mx-auto py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col font ",
    detailsContainer:
      "px-0 sm:px-6 md:px-8 lg:px-12  py-5 sm:py-6 md:py-8 lg:py-12 bg-white flex flex-col md:flex-row items-center",
    imageContainer:
      " md:mr-12 overflow-hidden flex items-center justify-center flex-col",
    contentContainer: "w-[100%] md:w-[60%] flex flex-col",
    header1: "font flex items-center justify-center mt-4",
    name: "font text-2xl md:text-3xl font-semibold text-primary flex-1",
    priceTextCut: `font text-red-500 font-bold text-xl md:text-lg my-3 decoration-red-500 ${
      discount && "line-through"
    }`,
    priceText: "font text-primary font-bold text-xl md:text-2xl my-3 mx-4",
    description: "text-sm text-black",
    btn: "rounded-md hover:bg-opacity-[0.9] transition duration-[200ms] my-6 bg-primary max-w-fit px-8 md:px-12 py-2 md:py-3 text-white font-semibold tracking-wide mx-auto md:mx-0 md:mr-3",
    outOfStockBtn:
      "transition duration-[200ms] my-6 bg-primary bg-opacity-[0.7] max-w-fit px-8 md:px-12 py-2 md:py-3 text-white font-bold tracking-wide mx-auto md:mx-0 cursor-not-allowed",

    ratings: "text-xs text-primary",
  };
  const [RatingValue, setRatingValue] = useState("0");
  const [PriceValue, setPriceValue] = useState(price);
  const [SizeValue, setSizeValue] = useState("M");
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [SelectedCategory1, setSelectedCategory1] = useState("");
  const [ColorValue, setColorValue] = useState("#000000");
  const [ItemCounts, setItemCounts] = useState(1);
  const [IsAdded, setIsAdded] = useState(false);
  const [ImgKey, setImgKey] = useState(images[0]._key);
  const [ImageURL, setImageURL] = useState(images[0]);
  const handleGetSize = (size) => {
    setSizeValue(size);
  };
  const handleGetPrice = (price) => {
    if (price.length > 0) {
      setPriceValue(price);
    }
  };

  const handleGetColor = (color) => {
    setColorValue(color);
  };
  const handleGetItemCount = (itemCount) => {
    setItemCounts(itemCount);
  };
  const handleSelectedCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  const handleSelectedCategory1 = (selectedCategory) => {
    setSelectedCategory1(selectedCategory);
  };
  // setting the condition for custom category
  // console.log(SelectedCategory && SelectedCategory[0].categorySizeContainer);
  useEffect(() => {
    if (SelectedCategory && SelectedCategory.length > 0) {
      if (SelectedCategory[0].categoryPrice) {
        setPriceValue(SelectedCategory[0].categoryPrice);
      }
      // if (SelectedCategory && SelectedCategory.length > 0) {
      //   setPriceValue(SelectedCategory[0].categoryPrice);
      // }
      else {
        setPriceValue(price);
      }
    }
  }, [SelectedCategory]);
  useEffect(() => {
    if (SelectedCategory1 && SelectedCategory1.length > 0) {
      if (SelectedCategory1[0].categoryPrice) {
        setPriceValue(SelectedCategory1[0].categoryPrice);
      } else {
        setPriceValue((prev) => prev);
      }
    }
  }, [SelectedCategory1]);
  const handleAddToCart = () => {
    if (typeof window !== "undefined") {
      let data = JSON.parse(localStorage.getItem("cart"));
      if (!data) {
        data = [];
      }
      let existingCartItemIndex;
      let existingCartItem;
      let updatedItems;
      if (data) {
        existingCartItemIndex = data.findIndex(
          (item) => item.slug === slugValue
        );
        existingCartItem = data[existingCartItemIndex];
      }
      if (existingCartItem) {
        let q =
          existingCartItem.quantity + ItemCounts <= 3
            ? existingCartItem.quantity + ItemCounts
            : existingCartItem.quantity;
        const newUpdatedItem = {
          ...existingCartItem,
          quantity:
            existingCartItem.quantity + ItemCounts <= 3
              ? existingCartItem.quantity + ItemCounts
              : existingCartItem.quantity,
          total: existingCartItem.price * q,
        };
        updatedItems = [...data];
        updatedItems[existingCartItemIndex] = newUpdatedItem;
      } else {
        updatedItems = data.concat({
          name: productName,
          price: !discount
            ? PriceValue
            : (PriceValue - (PriceValue * discount) / 100).toFixed(0),
          // price: PriceValue * 0.8,
          quantity: ItemCounts,
          image: urlForThumbnail(images[0]),
          total: !discount
            ? PriceValue * ItemCounts
            : (PriceValue - (PriceValue * discount) / 100).toFixed(0),
          // total: PriceValue * ItemCounts * 0.8,
          slug: slugValue,
          size: SizeValue,
          color: ColorValue,
          category: SelectedCategory,
          category1: SelectedCategory1,
          categoryMainTitle: categoryMainTitle && categoryMainTitle,
          categoryMainTitle1: categoryMainTitle1 && categoryMainTitle1,
        });
      }
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 3000);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
  };
  let average = 0;
  let sum = 0;
  if (rating) {
    for (let r of rating) {
      sum += +r;
    }
    average = (sum / rating.length).toFixed(1);
  }
  const { width } = useWindowSize();
  const handleImageClick = (imageKey) => {
    setImgKey(imageKey);
  };
  let index;
  let obj = images.find((o, i) => {
    if (o._key === ImgKey) {
      index = i;
      return true;
    }
  });
  useEffect(() => {
    if (
      SelectedCategory &&
      SelectedCategory.length > 0 &&
      SelectedCategory[0].categoryImage
    ) {
      setImageURL(SelectedCategory[0].categoryImage);
    } else if (images) {
      setImageURL(images[0]);
    }
  }, [SelectedCategory, images]);
  // console.log(SelectedCategory && SelectedCategory[0].categoryImage);
  // console.log(SelectedCategory && SelectedCategory[0].categoryColors);
  return (
    <Animator>
      <div className="" style={{ fontFamily: "Lato,sans-serif" }}>
        <Header headingText={`${productName}`} />
        <div className={style.wrapper}>
          {/* adding the single product details */}
          <div className={style.detailsContainer}>
            {/* image side of container */}
            <div className={style.imageContainer}>
              <div className="hover:scale-[1.2] transition duration-[800ms] overflow-hidden">
                {SelectedCategory ? (
                  <img src={`${urlForThumbnail(ImageURL)}`} />
                ) : (
                  <img src={`${urlForThumbnail(images[index])}`} />
                )}
              </div>
              {/* FOR ARRAY OF MULTIPLE IMAGES */}
              {!SelectedCategory && (
                <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
                  {images.map((it) => {
                    return (
                      <div
                        onClick={() => handleImageClick(it._key)}
                        className={`cursor-pointer ${ImgKey == it._key && ""}`}
                      >
                        <img
                          className={`cursor-pointer pb-1 ${
                            ImgKey == it._key && "border-b-2 border-primary "
                          }`}
                          src={`${urlForThumbnail(it)}`}
                          height={width < 700 ? 60 : 70}
                          width={width < 700 ? 60 : 90}
                          // className="hover:scale-[1.5] transition duration-[800ms] overflow-"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {/* content side of the container */}
            <div className={style.contentContainer}>
              {IsAdded ? (
                <p className="bg-primary px-4 py-2 text-white rounded max-w-fit my-2">
                  Successfully added to cart
                </p>
              ) : (
                <p className=" px-4 py-1 text-white rounded max-w-fit my-1">
                  {" "}
                  Successfully added to cart
                </p>
              )}
              <div className={style.header1}>
                <h2 className={style.name}>{productName}</h2>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={average}
                    precision={0.5}
                    size={"small"}
                    readOnly
                  />
                  <p className={style.ratings}>
                    ({rating && rating.length} Ratings)
                  </p>
                </Box>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className={style.priceTextCut}>Rs. {PriceValue}</p>
                  {discount && (
                    <div className="flex items-center justify-center">
                      <p className={style.priceText}>
                        Rs.{" "}
                        {(PriceValue - (PriceValue * discount) / 100).toFixed(
                          0
                        )}
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        ( {discount}% off )
                      </p>
                    </div>
                  )}
                </div>

                {stock && (
                  <p className="text-primary font-bold text-md md:text-xl">
                    Out of Stock
                  </p>
                )}
              </div>
              <p className={style.description}>{description}</p>

              <CustomCategory
                customCategoryData={customCategoryData}
                categoryMainTitle={categoryMainTitle}
                selectedCategory={handleSelectedCategory}
              />
              <Colors
                color={color}
                getColor={handleGetColor}
                categoryColors={
                  SelectedCategory && SelectedCategory[0].categoryColors
                }
              />
              <Size
                getSize={handleGetSize}
                getPrice={handleGetPrice}
                sizeData={size}
                categoryData={
                  SelectedCategory && SelectedCategory[0].categorySizeContainer
                }
              />
              <ItemCount itemCount={handleGetItemCount} />
              {stock ? (
                <div className="flex items-center">
                  <button className={style.outOfStockBtn}>Add to Cart</button>
                  <p className="mx-4 text-primary">Available Soon!</p>
                </div>
              ) : (
                <div className="flex">
                  <button className={style.btn} onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                  <Link href="/cart">
                    <button className={style.btn}>VIEW CART</button>
                  </Link>
                </div>
              )}
              <div className={style.refImageContainer}>
                {/* <Image src={''} height={} width={}/>
            <Image src={''} height={} width={}/>
            <Image src={''} height={} width={}/> */}
              </div>
            </div>
          </div>

          {/* ADDING THE MORE DETAILS OF THE PRODUCT OPTION */}
          <MoreDetails
            description={description}
            information={information}
            reviews={reviews}
            productName={productName}
            slug={slugValue}
          />
          <SimilarProducts category={category} />
        </div>
      </div>
    </Animator>
  );
};

export default ProductDetails;
