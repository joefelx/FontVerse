function FontCasing({ letterCase, setLetterCase }) {
  return (
    <div className="flex flex-col gap-3">
      <p>Letter Case</p>
      <div className="grid grid-flow-col gap-5 text-md">
        <button
          className={`px-2 py-1 rounded-3xl ${
            letterCase === "upper" && "bg-tan text-black"
          }`}
          onClick={() => setLetterCase("upper")}
        >
          UPPER CASE
        </button>
        <button
          className={`px-2 py-1 rounded-3xl ${
            letterCase === "lower" && "bg-tan text-black"
          }`}
          onClick={() => setLetterCase("lower")}
        >
          lower case
        </button>
        <button
          className={`px-2 py-1 rounded-3xl ${
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
