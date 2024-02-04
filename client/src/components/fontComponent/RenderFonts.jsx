import FontPreview from "./FontPreview";

function RenderFonts({ currentFont }) {
  return (
    <>
      {currentFont
        ? currentFont.fontWeights.map((f) => (
            <FontPreview
              fontFamily={currentFont.fontName}
              fontWeight={f.fontWeight}
            />
          ))
        : "No font found"}
    </>
  );
}

export default RenderFonts;
