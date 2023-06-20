import React, { useState, useEffect } from "react";
import LeaveAReview from "./LeaveAReview";
const style = {
  wrapper:
    " bg-[#ffffff] px-5 sm:px-6 md:px-8 lg:px-12  py-5 sm:py-6 md:py-8 lg:py-5 flex flex-col",
  heading: "text-2xl md:text-3xl text-primary my-6 font-bold smallDivider",
  reviewContainer: "flex flex-col justify-start",
  name: "text-xl md:text-2xl text-primary font-bold my-3",
  date: "text-sm md:text-sm text-stone-400 my-1",
  review: "text-sm md:text-md text-primary",
};
// WE ARE GETTING THE ARRAY OF REVIEWS FROM SANITY
const Review = ({ reviews, slug }) => {
  // const [ValidReviews, setValidReviews] = useState([]);
  // useEffect(() => {
  //   reviews.pop();
  //   setValidReviews(reviews);
  // }, []);
  // reviews.pop();
  // console.log("reviews");
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Customer Review</h2>
      {/* CREATING THE SINGLE REVIEW AND THEN MAP IT ON THE ARRAY */}
      {reviews &&
        reviews.map((r) => (
          <div className={style.reviewContainer}>
            <h2 className={style.name}>{r.name && r.name}</h2>
            <p className={style.date}>
              {r.createdAt && r.createdAt.slice(0, 10)}
            </p>
            <p className={style.review}>{r.review && r.review}</p>
          </div>
        ))}
      <LeaveAReview slug={slug} />
    </div>
  );
};

export default Review;
