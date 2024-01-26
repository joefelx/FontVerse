import { useState, useEffect } from "react";

import { fontWeightConversion } from "../utils";
import fontWeightMap from "../data/fontweight";

import useFont from "../hooks/useFont";

import { HiOutlineArrowLeft, HiOutlineArrowRight } from "./Icons";

const FontPreview = ({ fontFamily, fontWeight }) => {
  return (
    <div className="w-full h-auto min-h-[110px] flex justify-center text-black my-10">
      <div className="w-full max-w-6xl">
        <span className="text-xl">
          {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
          {fontWeightConversion(fontWeight)}
        </span>
        <h1
          className={`my-5 text-9xl outline-none `}
          suppressContentEditableWarning={true}
          contentEditable={true}
          spellCheck={false}
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeightConversion(fontWeight),
          }}
        >
          {fontFamily}
        </h1>
      </div>
    </div>
  );
};

function Font() {
  const {
    randomFetchFont,
    selectedFonts,
    addToCollection,
    currentFont,
    setCurrentFont,
  } = useFont();

  const [prev, setPrev] = useState({});

  const nextFont = async () => {
    setPrev(currentFont);
    randomFetchFont();
  };

  const previousFont = async () => {
    if (Object.keys(prev).length > 0) {
      setCurrentFont(prev);
    }
  };

  useEffect(() => {
    randomFetchFont();
  }, []);

  return (
    <div className="w-full h-auto min-h-[110px] flex justify-center font-[Mattone]">
      <div className="w-full max-w-6xl">
        {/* Function Bar */}
        <div className="w-full flex justify-between items-center my-5">
          {/* left button */}
          <button
            className="border-2 border-black w-14 h-14 rounded-full flex items-center justify-center text-3xl"
            onClick={previousFont}
          >
            <HiOutlineArrowLeft />
          </button>
          {/* add button */}
          <button
            className="text-base border-2 border-black rounded-3xl h-14 px-5 hover:bg-tan"
            onClick={() => addToCollection(currentFont.fontName)}
          >
            {selectedFonts.includes(currentFont.fontName)
              ? "SELECTED"
              : "ADD FONT"}
          </button>
          {/* right button */}
          <button
            className="border-2 border-black w-14 h-14 rounded-full flex items-center justify-center text-3xl"
            onClick={nextFont}
          >
            <HiOutlineArrowRight />
          </button>
        </div>
        {/* Font Preview */}
        {currentFont.fontWeights?.length > 2 ? (
          currentFont.fontWeights.map((f) => (
            <FontPreview
              fontFamily={currentFont.fontName}
              fontWeight={f.fontWeight}
            />
          ))
        ) : (
          <FontPreview
            fontFamily={currentFont.fontName}
            fontWeight={currentFont.fontWeights}
          />
        )}
      </div>
    </div>
  );
}

export default Font;
