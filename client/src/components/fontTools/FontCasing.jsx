function FontCasing({ letterCase, setLetterCase }) {
  return (
    <div>
      <p>Letter Case</p>
      <div className="grid grid-flow-col gap-5 my-5 text-lg">
        <button
          className={`p-2 rounded-lg ${
            letterCase === "upper" && "bg-tan text-black"
          }`}
          onClick={() => setLetterCase("upper")}
        >
          UPPER CASE
        </button>
        <button
          className={`p-2 rounded-lg ${
            letterCase === "lower" && "bg-tan text-black"
          }`}
          onClick={() => setLetterCase("lower")}
        >
          lower case
        </button>
        <button
          className={`p-2 rounded-lg ${
            letterCase === "cap" && "bg-tan text-black"
          }`}
          onClick={() => setLetterCase("cap")}
        >
          Capatalized
        </button>
      </div>
    </div>
  );
}

export default FontCasing;
