import RenderFonts from "./fontComponent/RenderFonts";
import FontsListPanel from "./fontComponent/FontsListPanel";

function Font() {
  return (
    <div className="w-full h-auto min-h-[110px] my-5  flex justify-between font-[Mattone] text-lightwhite">
      <FontsListPanel />
      <RenderFonts />
    </div>
  );
}

export default Font;
