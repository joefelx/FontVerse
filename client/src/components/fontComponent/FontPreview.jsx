import fontWeightConversion from "../../utils/fontWeightConversion";
import fontWeightMap from "../../data/fontweight";

function FontPreview({ fontFamily, fontWeight }) {
  return (
    <div className="w-full h-auto min-h-[110px] flex justify-center text-black my-10">
      <div className="w-full max-w-6xl">
        <span className="text-xl">
          {fontWeightMap[fontWeightConversion(fontWeight)]} /{" "}
          {fontWeightConversion(fontWeight)}
        </span>
        <h1
          className={`my-5 text-9xl outline-none `}
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
