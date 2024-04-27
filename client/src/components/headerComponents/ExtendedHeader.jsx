import FontSelected from "./FontSelected";
import ClipBoard from "./ClipBoard";

function ExtendedHeader({ selectedFonts, removeFromCollection }) {
  return (
    <div className={`w-full p-5 mb-10 md:mx-0 mx-3 relative z-[10] block `}>
      {/* user selection section */}

      {selectedFonts.length > 0 ? (
        <div className="flex md:flex-row flex-col justify-between z-[10]">
          {/* left */}
          <div className="flex-1">
            <span className="text-gray text-xl">Selected</span>
            {selectedFonts.map((font, index) => (
              <FontSelected
                key={index}
                font={font}
                removeFromCollection={removeFromCollection}
              />
            ))}
          </div>
          {/* right */}
          <div className="flex-1">
            {/* copy link section */}
            <ClipBoard title="HTML" fontsList={selectedFonts} linktag="html" />
            <ClipBoard title="CSS" fontsList={selectedFonts} linktag="css" />
            {/* style guide section */}
            <ClipBoard
              title="Style Guide"
              fontsList={selectedFonts}
              linktag="fontfamilies"
            />
          </div>
        </div>
      ) : (
        <span className="text-gray">No fonts selected</span>
      )}
    </div>
  );
}

export default ExtendedHeader;
