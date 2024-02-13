import React, { useState } from "react";

function FontSize({ size, setSize }) {
  //   const [size, setSize] = useState();
  return (
    <div className="flex flex-col gap-3">
      <p>Size</p>
      <div className="max-w-4xl">
        <input
          type="range"
          id="size"
          value={size}
          min="14"
          max="150"
          step="1"
          className="slider appearance-none w-full h-4 rounded-full outline-none opacity-50"
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <span>{size}px</span>
    </div>
  );
}

export default FontSize;
