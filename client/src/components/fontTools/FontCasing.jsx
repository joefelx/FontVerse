function FontCasing({ letterCase, setLetterCase }) {
  return (
    <div className="w-1/2 flex flex-col gap-3">
      <p>Letter Case</p>
      <div className="grid grid-flow-col bg-darkGray text-sm rounded-md">
        <button
          className={`p-2 rounded-md ${letterCase === "upper" && "bg-gray"}`}
          onClick={() => setLetterCase("upper")}
        >
          UPPER CASE
        </button>
        <button
          className={`p-2 rounded-md ${letterCase === "lower" && "bg-gray"}`}
          onClick={() => setLetterCase("lower")}
        >
          lower case
        </button>
        <button
          className={`p-2 rounded-md ${letterCase === "cap" && "bg-gray"}`}
          onClick={() => setLetterCase("cap")}
        >
          Capatalized
        </button>
      </div>
    </div>
  );
}

export default FontCasing;
