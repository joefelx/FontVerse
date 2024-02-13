import fontWeightConversion from "../../utils/fontWeightConversion";
import fontWeightMap from "../../data/fontweight";

function FontPreview({ fontFamily, fontWeight, className }) {
  return (
    <div
      className={`h-auto min-h-[110px] w-3xl max-w-3xl flex justify-start items-center flex-wrap my-4 text-secondary overflow-hidden ${className}`}
    >
      <div className="w-full overflow-hidden">
        <span className="text-md text-gray">
          {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
          {fontWeightConversion(fontWeight)}
        </span>

        <h1
          className={`my-2 text-6xl outline-none overflow-hidden`}
          suppressContentEditableWarning={true}
          contentEditable={true}
          spellCheck={false}
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeightConversion(fontWeight),
          }}
        >
          {fontFamily}
        </h1>
      </div>
    </div>
  );
}

export default FontPreview;
