import { useState } from "react";
import useFont from "../hooks/useFont";

function FontLayout() {
  const { currentFont, selectedFonts, addToCollection } = useFont();

  const [fontSize, setFontSize] = useState("h1");
  const [textField, setTextField] = useState("Paste Your Text");
  const [alignment, setAlignment] = useState("left");
  const [letterCase, setLetterCase] = useState("lower");

  return (
    <div className="w-full h-auto flex justify-center font-[Mattone] my-5">
      <div className="w-full h-auto max-w-6xl bg-white p-16 rounded-3xl border border-tan">
        {/* title */}
        <div>
          <h2 className="text-4xl">Layout</h2>
        </div>

        {/* Type field */}
        <div className=" text-black my-7 mb-10 py-5 border-b-2 bg-white border-tan ">
          <textarea
            spellCheck={false}
            style={{
              fontFamily: currentFont.fontName,
            }}
            className={`outline-none flex w-full  ${
              alignment === "right"
                ? " text-right"
                : alignment === "center"
                ? "text-center"
                : "text-left"
            } ${
              fontSize === "h1"
                ? "text-[32px]"
                : fontSize === "h2"
                ? "text-[24px]"
                : fontSize === "h3"
                ? "text-[18.72px]"
                : fontSize === "h4"
                ? "text-[16px]"
                : fontSize === "h5"
                ? "text-[13.28px]"
                : fontSize === "h6"
                ? "text-[10.72px]"
                : "text-[16px]"
            }
            ${
              letterCase === "upper"
                ? "uppercase"
                : letterCase === "cap"
                ? "capitalize"
                : "lowercase"
            }
            `}
            onChange={(e) => setTextField(e.target.value)}
            value={textField}
          />
        </div>

        {/* Font Weight and alignment */}
        <div className="flex justify-between my-7">
          {/* left */}
          <div>
            <p>Weight</p>
            {/*weight buttons */}
            <div className="grid grid-flow-col gap-6 my-5 text-2xl">
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "h1" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("h1");
                }}
              >
                H1
              </button>
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "h2" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("h2");
                }}
              >
                H2
              </button>
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "h3" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("h3");
                }}
              >
                H3
              </button>
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "h4" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("h4");
                }}
              >
                H4
              </button>
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "h5" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("h5");
                }}
              >
                H5
              </button>
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "h6" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("h6");
                }}
              >
                H6
              </button>
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  fontSize === "p" && "bg-tan"
                }`}
                onClick={() => {
                  setFontSize("p");
                }}
              >
                P
              </button>
            </div>
          </div>
          {/* right */}
          <div>
            <p>Alignment</p>
            <div className="grid grid-flow-col gap-6 my-5 text-2xl">
              {/* left align */}
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  alignment === "left" && "bg-tan"
                }`}
                onClick={() => setAlignment("left")}
              >
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
              </button>

              {/* center align */}
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  alignment === "center" && "bg-tan"
                }`}
                onClick={() => setAlignment("center")}
              >
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
              </button>

              {/* right align */}
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  alignment === "right" && "bg-tan"
                }`}
                onClick={() => setAlignment("right")}
              >
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
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-7">
          {/* Letter casing */}
          <div>
            <p>Letter Case</p>
            <div className="grid grid-flow-col gap-5 my-5 text-lg">
              <button
                className={`p-2 rounded-lg ${
                  letterCase === "upper" && "bg-tan"
                }`}
                onClick={() => setLetterCase("upper")}
              >
                UPPER CASE
              </button>
              <button
                className={`p-2 rounded-lg ${
                  letterCase === "lower" && "bg-tan"
                }`}
                onClick={() => setLetterCase("lower")}
              >
                lower case
              </button>
              <button
                className={`p-2 rounded-lg ${letterCase === "cap" && "bg-tan"}`}
                onClick={() => setLetterCase("cap")}
              >
                Capatalized
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p>Add to Collection</p>
            <button
              className=" text-base border-2 border-black rounded-2xl h-12 mt-5 px-5 hover:bg-tan"
              onClick={() => addToCollection(currentFont.fontName)}
            >
              {selectedFonts.includes(currentFont.fontName)
                ? "SELECTED"
                : "ADD FONT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontLayout;
