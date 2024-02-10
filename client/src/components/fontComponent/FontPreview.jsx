import fontWeightConversion from "../../utils/fontWeightConversion";

function FontPreview({ fontFamily, fontWeight, className }) {
  return (
    <div
      className={`h-auto min-h-[110px] flex justify-center  text-lightwhite overflow-hidden ${className}`}
    >
      <div className="w-full">
        <h1
          className={`my-5 text-7xl outline-none`}
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
