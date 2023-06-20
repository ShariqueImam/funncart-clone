import React, { useState } from "react";
import axios from "axios";

const style = {
  wrapper: "flex flex-col my-12",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  smallHeading:
    " text-4xl md:text-4xl max-w-fit mx-auto py-2 text-stone-800 text-center",
  btn: "text-lg md:text-lg rounded-full px-12 md:px-24 py-4 md:py-6 max-w-fit mx-auto bg-[#c8a165] text-stone-100 hover:bg-opacity-[0.9] transition duration-[300ms]",
  suggestionContainer: "flex items-center jusitfy-center flex-col my-8",
  input:
    "px-4 py-2 md:px-3 md:py-2 w-[80%] md:w-[37%] mx-auto bg-transparent border-2 border-stone-200 mb-12",
  btn: "text-lg md:text-lg  px-12 md:px-24 py-4 md:py-4 max-w-fit mx-auto bg-[#c8a165] text-stone-100 hover:bg-opacity-[0.9] transition duration-[300ms]",
};
const SuggestionsButton = () => {
  const [Suggestion, setSuggestion] = useState("");
  const tokenWithWriteAccess =
    "skcCBItUtJgAVMB47KUJ1jSlusnFrqwt9B97VntAuRxZFps97GT0xEj0oTgXx1iKN6cDlwX4ZblmntN1MBbSmY2IaeJZwZ4qSL7uvtlR007GUgQE9Fb7V9k8q0kx3mcBiSixAz6Icg6m4lsfIsZo8aTS14P4WH3AdeWWdvW23CtVBtH0Y7wy";
  const suggestionChangeHandler = (e) => {
    setSuggestion(e.target.value);
  };
  const handleSendSuggestion = () => {
    const sendData = async () => {
      const { data } = await axios.post(
        `https://p0ifd5ok.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "suggestions",
                suggestion: Suggestion,
                createdAt: new Date().toISOString(),
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
      setSuggestion("");
    };
    sendData();
  };
  return (
    <div className={style.wrapper}>
      <div className={style.headingContainer}>
        <h2
          className={style.smallHeading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          Your Suggestions
        </h2>
      </div>
      <div className={style.suggestionContainer}>
        <input
          type="text"
          placeholder="Your suggestions..."
          className={style.input}
          value={Suggestion}
          onChange={suggestionChangeHandler}
        />
        <button className={style.btn} onClick={handleSendSuggestion}>
          Send
        </button>
      </div>
    </div>
  );
};

export default SuggestionsButton;
