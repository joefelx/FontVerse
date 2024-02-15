import useFont from "../../hooks/useFont";

function FunctionPanel() {
  const { selectedFonts, currentFont, addToCollection } = useFont();

  return (
    <button
      className={`${
        selectedFonts.includes(currentFont?.fontName)
          ? "text-secondary border border-secondary rounded-2xl px-3"
          : "text-black bg-tan"
      } text-black text-sm border-2 border-black rounded-2xl px-5 h-8 hover:bg-tan`}
      onClick={() => addToCollection(currentFont?.fontName)}
    >
      {selectedFonts.includes(currentFont?.fontName) ? "SELECTED" : "ADD"}
    </button>
  );
}

export default FunctionPanel;
