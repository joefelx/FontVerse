function FontSize({ size, setSize }) {
  return (
    <div className="md:w-1/2 flex flex-col gap-3">
      <div className="flex gap-5">
        <p>Size</p> <span>{size}px</span>
      </div>
      <div className="w-full">
        <input
          type="range"
          id="size"
          value={size}
          min="14"
          max="150"
          step="1"
          className="slider appearance-none w-full h-4 rounded-full bg-gray/30 outline-none opacity-100"
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FontSize;
