function FontWeight({ currentFont, fontWeight, setfontWeight }) {
  return (
    <div className="flex flex-col gap-3">
      <p>Weight</p>
      {/*weight buttons */}
      <div className="flex justify-between items-center text-md bg-darkGray rounded-md">
        {currentFont?.fontWeights?.map((w) => (
          <button
            className={`hover:bg-gray rounded-md p-2 ${
              fontWeight === w?.fontWeight && "bg-gray"
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
