import fontWeightConversion from "../../utils/fontWeightConversion";
import fontWeightMap from "../../data/fontweight";

function FontPreview({ fontFamily, fontWeight, className }) {
  return (
    <div
      className={`h-auto min-h-[110px] my-4 border-b border-lightwhite flex justify-center  text-lightwhite overflow-hidden ${className}`}
    >
      <div className="w-full">
        <span className="text-xl text-lightwhite">
          {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
          {fontWeightConversion(fontWeight)}
        </span>

        <h1
          className={`my-5 text-9xl outline-none`}
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
