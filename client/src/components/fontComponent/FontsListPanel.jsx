import React from "react";
import useFont from "../../hooks/useFont";

function FontsListPanel() {
  const { fontsList, setCurrentFont } = useFont();
  return (
    <div className="sticky top-16 p-4 h-auto flex-1 flex flex-col rounded-2xl overflow-y-auto">
      {fontsList.map((f) => (
        <span
          className="m-2 text-lg cursor-pointer"
          style={{ fontFamily: f.fontName }}
          onClick={() => setCurrentFont(f)}
        >
          {f.fontName}
        </span>
      ))}
    </div>
  );
}

export default FontsListPanel;
