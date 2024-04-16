function FontWeight({ currentFont, fontWeight, setfontWeight }) {
  const FontWeightButton = ({ fontWeight, weight }) => {
    return (
      <button
        className={`hover:bg-gray rounded-md p-2 ${
          fontWeight === weight?.fontWeight && "bg-gray"
        }`}
        onClick={() => {
          setfontWeight(weight?.fontWeight);
        }}
      >
        {weight?.fontWeight}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-3 md:my-0 my-10">
      <p>Weight</p>
      {/*weight buttons */}

      <div
        className={`flex md:justify-between items-center flex-wrap text-sm overflow-hidden ${
          currentFont?.fontWeights.length > 1 && "md:bg-darkGray"
        } rounded-md`}
      >
        {currentFont?.fontWeights?.map((w, index) => (
          <FontWeightButton key={index} fontWeight={fontWeight} weight={w} />
        ))}
      </div>
    </div>
  );
}

export default FontWeight;
