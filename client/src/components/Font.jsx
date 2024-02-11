import RenderFonts from "./fontComponent/RenderFonts";
import FontsListPanel from "./fontComponent/FontsListPanel";

function Font() {
  return (
    <div className="w-full h-auto min-h-[110px] flex justify-center font-[Mattone] text-lightwhite">
      <div className="w-full max-w-7xl my-5 flex justify-between">
        <FontsListPanel />
        <RenderFonts />
      </div>
    </div>
  );
}

export default Font;
