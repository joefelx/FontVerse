function FontWeight({ currentFont, fontWeight, setfontWeight }) {
  return (
    <div>
      <p>Weight</p>
      {/*weight buttons */}
      <div className="flex justify-between my-5 text-2xl">
        {currentFont?.fontWeights?.map((w) => (
          <button
            className={`hover:bg-tan hover:text-black rounded-full p-2 ${
              fontWeight === w?.fontWeight && "bg-tan text-black"
            }`}
            onClick={() => {
              setfontWeight(w?.fontWeight);
            }}
          >
            {w?.fontWeight}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FontWeight;
