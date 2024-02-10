import RenderFonts from "./RenderFonts";
import FunctionPanel from "./FunctionPanel";
import useFont from "../../hooks/useFont";

function Font() {
  const { currentFont } = useFont();

  return (
    <div className="w-full h-auto min-h-[110px] flex justify-center font-[Mattone]">
      <div className="w-full max-w-6xl">
        {/* Function Bar */}
        <FunctionPanel />
        {/* Font Preview */}
        {currentFont && <RenderFonts />}
      </div>
    </div>
  );
}

export default Font;
