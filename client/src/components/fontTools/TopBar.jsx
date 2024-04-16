import fontWeightMap from "../../data/fontweight";
import fontWeightConversion from "../../utils/fontWeightConversion";
import { useNavigate } from "react-router";

function TopBar({
  currentFont,
  fontWeight,
  fontSize,
  addToCollection,
  selectedFonts,
}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${currentFont.fontName}`);
  }

  return (
    <div className="flex flex-col text-center md:flex-row md:justify-between md:items-center">
      <span
        className="text-xl text-white cursor-pointer pb-2 md:pb-0"
        onClick={handleClick}
      >
        {currentFont.fontName}
      </span>
      <span className="text-sm text-gray py-2 md:py-0">
        {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
        {fontWeightConversion(fontWeight)} / {fontSize + "px"}
      </span>
      <button
        className={`${
          selectedFonts.includes(currentFont?.fontName)
            ? "text-secondary border border-secondary rounded-2xl px-3"
            : "text-white bg-blue"
        } text-black text-sm border-2 border-black rounded-2xl h-8 px-5 `}
        onClick={() => addToCollection(currentFont?.fontName)}
      >
        {selectedFonts.includes(currentFont?.fontName) ? "Selected" : "Add"}
      </button>
    </div>
  );
}

export default TopBar;
