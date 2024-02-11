import { useState } from "react";
import useFont from "../hooks/useFont";
import sortArrayByFontWeight from "../utils/sortArrayByFontWeight";
import TextArea from "./fontTools/TextArea";
import TopBar from "./fontTools/TopBar";
import FontWeight from "./fontTools/FontWeight";
import FontAlign from "./fontTools/FontAlign";
import FontCasing from "./fontTools/FontCasing";

function FontLayout() {
  const { currentFont, selectedFonts, addToCollection } = useFont();

  const [fontWeight, setfontWeight] = useState("500");
  const [alignment, setAlignment] = useState("left");
  const [letterCase, setLetterCase] = useState("lower");

  sortArrayByFontWeight(currentFont?.fontWeights);

  return (
    <div className="w-full max-w-7xl h-auto font-[Mattone] bg-black text-white px-16 rounded-3xl border border-tan overflow-hidden">
      <div className=" text-black my-7 mb-10 py-5 overflow-hidden">
        <TopBar
          currentFont={currentFont}
          fontWeight={fontWeight}
          addToCollection={addToCollection}
          selectedFonts={selectedFonts}
        />

        <TextArea
          currentFont={currentFont}
          fontWeight={fontWeight}
          alignment={alignment}
          letterCase={letterCase}
        />
      </div>

      {/* Font Weight */}
      <FontWeight
        currentFont={currentFont}
        fontWeight={fontWeight}
        setfontWeight={setfontWeight}
      />
      <div className="flex justify-between my-7">
        <FontAlign alignment={alignment} setAlignment={setAlignment} />
        <FontCasing letterCase={letterCase} setLetterCase={setLetterCase} />
      </div>
    </div>
  );
}

export default FontLayout;
