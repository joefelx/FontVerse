import FontPreview from "./FontPreview";
import useFont from "../../hooks/useFont";
import sortArrayByFontWeight from "../../utils/sortArrayByFontWeight";
import FunctionPanel from "./FunctionPanel";

function RenderFonts() {
  const { currentFont } = useFont();

  sortArrayByFontWeight(currentFont.fontWeights);

  return (
    <div className="ml-5 flex-[3]">
      <FunctionPanel />
      {currentFont
        ? currentFont.fontWeights?.map((f, index) => (
            <>
              <FontPreview
                key={index}
                fontFamily={currentFont.fontName}
                fontWeight={f.fontWeight}
              />
            </>
          ))
        : "No font found"}
    </div>
  );
}

export default RenderFonts;
