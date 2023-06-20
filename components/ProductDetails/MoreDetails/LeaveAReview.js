import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";
const style = {
  wrapper: "mt-12",
  heading: "text-2xl md:text-3xl text-primary my-6 font-bold smallDivider",
  para: "text-stone-600 font-semibold text-xs",
  reviewContainer: "flex flex-col justify-start",
  input:
    "bg-[#f6f6f6] my-4 px-3 py-3 md:px-4 md:px-5 outline-none border-2 border-transparent focus:border-primary",
  btn: "bg-opacity-[1] hover:bg-opacity-[0.9] transition duration-[300ms] my-6 bg-primary max-w-fit px-8 md:px-12 py-2 md:py-3 text-stone-100 font-bold tracking-wider",
};
const LeaveAReview = ({ slug }) => {
  const [Review, setReview] = useState("");
  const [Name, setName] = useState("");
  const [RatingValue, setRatingValue] = useState("0");
  const [IsSubmit, setIsSubmit] = useState(false);
  const tokenWithWriteAccess =
    "skcCBItUtJgAVMB47KUJ1jSlusnFrqwt9B97VntAuRxZFps97GT0xEj0oTgXx1iKN6cDlwX4ZblmntN1MBbSmY2IaeJZwZ4qSL7uvtlR007GUgQE9Fb7V9k8q0kx3mcBiSixAz6Icg6m4lsfIsZo8aTS14P4WH3AdeWWdvW23CtVBtH0Y7wy";
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  const submitReview = () => {
    // SEND THE REQUEST TO SANITY TO SAVE THE DATA IN THE DATABASE
    const sendData = async () => {
      const { data } = await axios.post(
        `https://p0ifd5ok.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              patch: {
                query: `*[_type == 'allProduct' && slug.current == '${slug}']`,
                insert: {
                  before: "reviews[-1]",
                  items: [
                    {
                      name: Name,
                      createdAt: new Date().toISOString(),
                      review: Review,
                      _key: slug,
                    },
                  ],
                },
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
      const { data1 } = await axios.post(
        `https://p0ifd5ok.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              patch: {
                query: `*[_type == 'allProduct' && slug.current == '${slug}']`,
                insert: {
                  after: "rating[-1]",
                  items: [`${RatingValue}`],
                },
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
      setRatingValue("");
      setName("");
      setReview("");
      setIsSubmit(true);
      setTimeout(() => {
        setIsSubmit(false);
      }, 4000);
    };

    sendData();
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      <h2 className={style.heading}>Leave a Review</h2>
      {IsSubmit && (
        <p className="bg-[#c8a165]px-4 py-2 text-gray-50 rounded max-w-fit my-6">
          Your review submitted successfully
        </p>
      )}

      {/* ADDING THE RATING COMPONENT */}
      <p className={style.para}>Your rating</p>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Rating
          name="simple-controlled"
          value={RatingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
          precision={1}
        />
      </Box>
      <div className={style.reviewContainer}>
        <input
          type="text"
          className={style.input}
          value={Name}
          onChange={handleNameChange}
          placeholder="Name..."
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={handleReviewChange}
          value={Review}
          className={style.input}
          placeholder="Your Review..."
        ></textarea>
        <button className={style.btn} onClick={submitReview}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LeaveAReview;
