import { useContext } from "react";
import { FontContext } from "../context/FontContext";

const FontDetail = ({ title, name, currentFont }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-base text-gray">{title}</span>
      <h3
        className="text-xl text-white"
        style={{
          fontFamily: currentFont.fontName,
        }}
      >
        {name}
      </h3>
    </div>
  );
};

function FontAbout({ currentFont }) {
  return (
    <div className="w-full h-auto min-h-[110px] font-[Mattone] my-5  flex justify-between bg-black text-secondary p-12 rounded-3xl border border-tan">
      {/* right */}
      <div className="flex-[2] flex flex-col gap-5">
        <FontDetail
          title="Font Family"
          name={currentFont.fontName}
          currentFont={currentFont}
        />
        <FontDetail
          title="Designed / Origin"
          name={currentFont.fontDetails}
          currentFont={currentFont}
        />
      </div>
    </div>
  );
}

export default FontAbout;
