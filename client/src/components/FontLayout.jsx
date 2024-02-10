import { useState } from "react";
import useFont from "../hooks/useFont";
import FontPreview from "./fontComponent/FontPreview";
import sortArrayByFontWeight from "../utils/sortArrayByFontWeight";
import fontWeightMap from "../data/fontweight";
import { fontWeightConversion } from "../utils";

function FontLayout() {
  const { currentFont, selectedFonts, addToCollection } = useFont();

  const [fontWeight, setfontWeight] = useState("h1");
  const [textField, setTextField] = useState("Paste Your Text");
  const [alignment, setAlignment] = useState("left");
  const [letterCase, setLetterCase] = useState("lower");

  sortArrayByFontWeight(currentFont.fontWeights);

  return (
    <div className="w-full h-auto flex justify-center font-[Mattone] ">
      <div className="w-full h-auto bg-black text-white px-16 rounded-3xl border border-tan">
        {/* Type field */}
        <div className=" text-black my-7 mb-10 py-5">
          {currentFont && (
            <>
              <div className="flex justify-between">
                <span className="text-xl text-lightwhite">
                  {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
                  {fontWeightConversion(fontWeight)}
                </span>
                <button
                  className={`${
                    selectedFonts.includes(currentFont?.fontName)
                      ? "text-lightwhite border border-lightwhite rounded-2xl px-3"
                      : "text-black bg-tan"
                  } text-black text-base border-2 border-black rounded-2xl px-5 hover:bg-tan`}
                  onClick={() => addToCollection(currentFont?.fontName)}
                >
                  {selectedFonts.includes(currentFont?.fontName)
                    ? "SELECTED"
                    : "ADD FONT"}
                </button>
              </div>

              <FontPreview
                fontFamily={currentFont?.fontName}
                fontWeight={
                  fontWeight === "100"
                    ? currentFont?.fontWeights[0]?.fontWeight
                    : fontWeight === "200"
                    ? currentFont?.fontWeights[1]?.fontWeight
                    : fontWeight === "300"
                    ? currentFont?.fontWeights[2]?.fontWeight
                    : fontWeight === "400"
                    ? currentFont?.fontWeights[3]?.fontWeight
                    : fontWeight === "500"
                    ? currentFont?.fontWeights[4]?.fontWeight
                    : fontWeight === "600"
                    ? currentFont?.fontWeights[5]?.fontWeight
                    : fontWeight === "700"
                    ? currentFont?.fontWeights[6]?.fontWeight
                    : fontWeight === "800"
                    ? currentFont?.fontWeights[7]?.fontWeight
                    : currentFont?.fontWeights[8]?.fontWeight
                }
                spellCheck={false}
                style={{
                  fontFamily: currentFont?.fontName,
                }}
                className={`outline-none flex w-full bg-black text-white ${
                  alignment === "right"
                    ? " text-right"
                    : alignment === "center"
                    ? "text-center"
                    : "text-left"
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
            </>
          )}
        </div>

        {/* Font Weight and alignment */}

        <div>
          <p>Weight</p>
          {/*weight buttons */}
          <div className="flex justify-between my-5 text-2xl">
            {currentFont.fontWeights?.map((w) => (
              <button
                className={`hover:bg-tan hover:text-black rounded-full p-2 ${
                  fontWeight === w?.fontWeight && "bg-tan text-black"
                }`}
                onClick={() => {
                  setfontWeight(w?.fontWeight);
                }}
              >
                {w?.fontWeight}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between my-7">
          {/* right */}
          <div>
            <p>Alignment</p>
            <div className="grid grid-flow-col gap-6 my-5 text-2xl">
              {/* left align */}
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  alignment === "left" && "bg-tan text-black"
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
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* center align */}
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  alignment === "center" && "bg-tan text-black"
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
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* right align */}
              <button
                className={`hover:bg-tan rounded-full p-2 ${
                  alignment === "right" && "bg-tan text-black"
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
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p>Letter Case</p>
            <div className="grid grid-flow-col gap-5 my-5 text-lg">
              <button
                className={`p-2 rounded-lg ${
                  letterCase === "upper" && "bg-tan text-black"
                }`}
                onClick={() => setLetterCase("upper")}
              >
                UPPER CASE
              </button>
              <button
                className={`p-2 rounded-lg ${
                  letterCase === "lower" && "bg-tan text-black"
                }`}
                onClick={() => setLetterCase("lower")}
              >
                lower case
              </button>
              <button
                className={`p-2 rounded-lg ${
                  letterCase === "cap" && "bg-tan text-black"
                }`}
                onClick={() => setLetterCase("cap")}
              >
                Capatalized
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontLayout;
