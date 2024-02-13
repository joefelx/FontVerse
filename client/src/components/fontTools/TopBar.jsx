import fontWeightMap from "../../data/fontweight";
import fontWeightConversion from "../../utils/fontWeightConversion";

function TopBar({
  currentFont,
  fontWeight,
  fontSize,
  addToCollection,
  selectedFonts,
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xl text-tan">{currentFont.fontName}</span>
      <span className="text-sm text-gray">
        {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
        {fontWeightConversion(fontWeight)} / {fontSize + "px"}
      </span>
      <button
        className={`${
          selectedFonts.includes(currentFont?.fontName)
            ? "text-secondary border border-secondary rounded-2xl px-3"
            : "text-black bg-tan"
        } text-black text-sm border-2 border-black rounded-2xl h-8 px-5 hover:bg-tan hover:text-black`}
        onClick={() => addToCollection(currentFont?.fontName)}
      >
        {selectedFonts.includes(currentFont?.fontName) ? "SELECTED" : "ADD"}
      </button>
    </div>
  );
}

export default TopBar;
