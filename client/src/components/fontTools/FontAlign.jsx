import React from "react";

function FontAlign({ alignment, setAlignment }) {
  return (
    <div className="flex flex-col gap-3">
      <p>Alignment</p>
      <div className="grid grid-flow-col gap-6 text-2xl">
        {/* left align */}
        <button
          className={`rounded-full p-2 ${
            alignment === "left" && "bg-tan text-black"
          }`}
          onClick={() => setAlignment("left")}
        >
          {alignment === "left" ? (
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 1H1M13 7H1M15 13H1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 1H1M13 7H1M15 13H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* center align */}
        <button
          className={`rounded-full p-2 ${
            alignment === "center" && "bg-tan text-black"
          }`}
          onClick={() => setAlignment("center")}
        >
          {alignment === "center" ? (
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1H17.5M5.5 7H13.5M3.5 13H15.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1H17.5M5.5 7H13.5M3.5 13H15.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* right align */}
        <button
          className={`rounded-full p-2 ${
            alignment === "right" && "bg-tan text-black"
          }`}
          onClick={() => setAlignment("right")}
        >
          {alignment === "right" ? (
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H17M7 7H17M3 13H17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H17M7 7H17M3 13H17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default FontAlign;
