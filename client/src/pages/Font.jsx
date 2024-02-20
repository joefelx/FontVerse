import RenderFonts from "../components/fontComponent/RenderFonts";
import FontAbout from "../components/FontAbout";
import { useParams } from "react-router-dom";

import useFont from "../hooks/useFont";
import { useEffect } from "react";
import Capitalize from "../utils/capitalize";
import { FontLayout } from "../components";

function Font() {
  const { currentFont, fetchFonts } = useFont();
  const { fontName } = useParams();

  useEffect(() => {
    fetchFonts("fontName", Capitalize(fontName));
  }, []);

  return (
    <div className="my-5 w-full h-auto min-h-[110px] flex justify-center font-[Mattone] text-secondary">
      <div className="max-w-6xl">
        <RenderFonts />
        <FontLayout currentFont={currentFont} />
        <FontAbout currentFont={currentFont} />
      </div>
    </div>
  );
}

export default Font;
