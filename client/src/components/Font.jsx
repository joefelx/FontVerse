import RenderFonts from "./fontComponent/RenderFonts";
import FontsListPanel from "./fontComponent/FontsListPanel";

import useFont from "../hooks/useFont";

function Font() {
  const { currentFont } = useFont();

  return (
    <div className="h-auto min-h-[110px] my-5 flex justify-center  font-[Mattone] text-secondary">
      {/* <FontsListPanel /> */}
      <RenderFonts />
    </div>
  );
}

export default Font;
