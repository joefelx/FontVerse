import FontPreview from "./FontPreview";
import useFont from "../../hooks/useFont";
import sortArrayByFontWeight from "../../utils/sortArrayByFontWeight";

function RenderFonts() {
  const { currentFont } = useFont();

  sortArrayByFontWeight(currentFont.fontWeights);

  return (
    <>
      {currentFont
        ? currentFont.fontWeights?.map((f, index) => (
            <FontPreview
              key={index}
              fontFamily={currentFont.fontName}
              fontWeight={f.fontWeight}
            />
          ))
        : "No font found"}
    </>
  );
}

export default RenderFonts;
