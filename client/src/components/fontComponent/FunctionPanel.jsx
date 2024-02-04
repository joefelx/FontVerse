import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "../Icons";

import useFont from "../../hooks/useFont";

function FunctionPanel() {
  const [prev, setPrev] = useState({});
  const {
    selectedFonts,
    currentFont,
    randomFetchFont,
    addToCollection,
    setCurrentFont,
  } = useFont();

  const nextFont = async () => {
    setPrev(currentFont);
    randomFetchFont();
  };

  const previousFont = async () => {
    if (Object.keys(prev).length > 0) {
      setCurrentFont(prev);
    }
  };
  return (
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
        {selectedFonts.includes(currentFont.fontName) ? "SELECTED" : "ADD FONT"}
      </button>
      {/* right button */}
      <button
        className="border-2 border-black w-14 h-14 rounded-full flex items-center justify-center text-3xl"
        onClick={nextFont}
      >
        <HiOutlineArrowRight />
      </button>
    </div>
  );
}

export default FunctionPanel;
