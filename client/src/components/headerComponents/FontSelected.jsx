function FontSelected({ font, removeFromCollection }) {
  return (
    <div className="flex my-3 z-[10]">
      {/* checkbox */}
      <svg
        width="25"
        height="25"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={() => {
          removeFromCollection(font);
        }}
      >
        <path
          d="M8.5 16L14.125 21.625L23.5 10.375M1 25V7C1 4.9 1 3.85 1.40875 3.0475C1.76875 2.34063 2.34063 1.76875 3.0475 1.40875C3.85 1 4.9 1 7 1H25C27.1 1 28.15 1 28.9506 1.40875C29.6575 1.76875 30.2312 2.34063 30.5912 3.0475C31 3.84812 31 4.89812 31 6.99438V25.0075C31 27.1038 31 28.1519 30.5912 28.9525C30.231 29.6582 29.6567 30.2318 28.9506 30.5912C28.15 31 27.1019 31 25.0056 31H6.99438C4.89812 31 3.84812 31 3.0475 30.5912C2.34192 30.2317 1.76827 29.6581 1.40875 28.9525C1 28.15 1 27.1 1 25Z"
          stroke="#00a6ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl ml-5">{font}</span>
    </div>
  );
}

export default FontSelected;
