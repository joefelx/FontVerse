import useFont from "../../hooks/useFont";

function FunctionPanel() {
  const { selectedFonts, currentFont, addToCollection } = useFont();

  return (
    <div className="w-full flex justify-between items-center my-5 text-lit">
      <button
        className={`${
          selectedFonts.includes(currentFont?.fontName)
            ? "text-lightwhite border border-lightwhite rounded-2xl px-3"
            : "text-black bg-tan"
        } text-black text-base border-2 border-black rounded-2xl px-5 hover:bg-tan`}
        onClick={() => addToCollection(currentFont?.fontName)}
      >
        {selectedFonts.includes(currentFont?.fontName)
          ? "SELECTED"
          : "ADD FONT"}
      </button>
    </div>
  );
}

export default FunctionPanel;
