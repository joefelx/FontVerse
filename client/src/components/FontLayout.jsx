import { useState } from "react";
import useFont from "../hooks/useFont";
import sortArrayByFontWeight from "../utils/sortArrayByFontWeight";
import TextArea from "./fontTools/TextArea";
import TopBar from "./fontTools/TopBar";
import FontWeight from "./fontTools/FontWeight";
import FontAlign from "./fontTools/FontAlign";
import FontCasing from "./fontTools/FontCasing";
import FontSize from "./fontTools/FontSize";

function FontLayout({ currentFont }) {
  const { selectedFonts, addToCollection } = useFont();

  const [fontWeight, setfontWeight] = useState("500");
  const [fontSize, setFontSize] = useState("70");
  const [alignment, setAlignment] = useState("left");
  const [letterCase, setLetterCase] = useState("lower");

  sortArrayByFontWeight(currentFont?.fontWeights);

  return (
    <div className="p-12 my-10 w-full max-w-6xl h-auto flex flex-col gap-6 font-[Mattone]  rounded-2xl bg-black text-white overflow-hidden">
      <div className=" text-black overflow-hidden">
        <TopBar
          currentFont={currentFont}
          fontWeight={fontWeight}
          fontSize={fontSize}
          addToCollection={addToCollection}
          selectedFonts={selectedFonts}
        />

        <TextArea
          currentFont={currentFont}
          fontWeight={fontWeight}
          fontSize={fontSize}
          alignment={alignment}
          letterCase={letterCase}
        />
      </div>

      <div className="flex md:flex-row flex-col md:justify-between md:gap-6">
        {/* Font Weight */}
        <FontWeight
          currentFont={currentFont}
          fontWeight={fontWeight}
          setfontWeight={setfontWeight}
        />

        <FontSize size={fontSize} setSize={setFontSize} />
      </div>

      <div className="flex md:flex-row flex-col justify-between">
        <FontAlign alignment={alignment} setAlignment={setAlignment} />
        <FontCasing letterCase={letterCase} setLetterCase={setLetterCase} />
      </div>
    </div>
  );
}

export default FontLayout;
