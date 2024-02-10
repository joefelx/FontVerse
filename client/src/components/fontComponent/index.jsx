import RenderFonts from "./RenderFonts";
import FunctionPanel from "./FunctionPanel";
import useFont from "../../hooks/useFont";
import FontLayout from "../FontLayout";

function Font() {
  const { currentFont, fontsList, setCurrentFont } = useFont();

  return (
    <div className="w-full h-auto min-h-[110px] flex justify-center font-[Mattone] text-lightwhite">
      <div className="w-full max-w-7xl my-5 flex justify-between">
        <div className="sticky top-16 p-4 h-auto flex-1 flex flex-col border border-tan rounded-2xl overflow-scroll">
          {fontsList.map((f) => (
            <span
              className="m-2 text-5xl cursor-pointer"
              style={{ fontFamily: f.fontName }}
              onClick={() => setCurrentFont(f)}
            >
              {f.fontName}
            </span>
          ))}
        </div>
        <div className="ml-5 flex-[3]">{currentFont && <FontLayout />}</div>
      </div>
    </div>
  );
}

export default Font;
