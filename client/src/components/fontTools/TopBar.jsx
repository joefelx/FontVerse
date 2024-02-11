import fontWeightMap from "../../data/fontweight";
import fontWeightConversion from "../../utils/fontWeightConversion";

function TopBar({ currentFont, fontWeight, addToCollection, selectedFonts }) {
  return (
    <div className="flex justify-between">
      <span className="text-xl text-lightwhite">{currentFont.fontName}</span>
      <span className="text-xl text-lightwhite">
        {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
        {fontWeightConversion(fontWeight)}
      </span>
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

export default TopBar;
