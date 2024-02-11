import { useContext } from "react";
import { FontContext } from "../context/FontContext";

const FontDetail = ({ title, name, currentFont }) => {
  return (
    <div className="mb-10">
      <span className=" text-base">{title}</span>
      <h3
        className=" text-2xl mt-3"
        style={{
          fontFamily: currentFont.fontName,
        }}
      >
        {name}
      </h3>
    </div>
  );
};

function FontAbout() {
  const { currentFont } = useContext(FontContext);

  return (
    <div className="w-full h-auto min-h-[110px] font-[Mattone] my-5  flex justify-between bg-black text-lightwhite p-16 rounded-3xl border border-tan">
      {/* left */}
      <div className="flex-1">
        <h2 className="text-4xl">About</h2>
      </div>
      {/* right */}
      <div className="flex-[2]">
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
