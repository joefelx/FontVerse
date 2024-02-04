import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import useFont from "../hooks/useFont";
import {
  IoCopyOutline,
  FiSearch,
  BsChevronCompactDown,
} from "../components/Icons";

// Components Used inside the Header
const FontSelected = ({ fontName, index, removeFromCollection }) => {
  return (
    <div className="flex my-3 z-[10]">
      {/* checkbox */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          removeFromCollection(index);
        }}
      >
        <path
          d="M8.5 16L14.125 21.625L23.5 10.375M1 25V7C1 4.9 1 3.85 1.40875 3.0475C1.76875 2.34063 2.34063 1.76875 3.0475 1.40875C3.85 1 4.9 1 7 1H25C27.1 1 28.15 1 28.9506 1.40875C29.6575 1.76875 30.2312 2.34063 30.5912 3.0475C31 3.84812 31 4.89812 31 6.99438V25.0075C31 27.1038 31 28.1519 30.5912 28.9525C30.231 29.6582 29.6567 30.2318 28.9506 30.5912C28.15 31 27.1019 31 25.0056 31H6.99438C4.89812 31 3.84812 31 3.0475 30.5912C2.34192 30.2317 1.76827 29.6581 1.40875 28.9525C1 28.15 1 27.1 1 25Z"
          stroke="#212121"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="text-4xl ml-5">{fontName}</span>
    </div>
  );
};

const CopyBox = ({ title, fontsList, linktag }) => {
  const [copyLink, setCopyLink] = useState("");

  let copyText = "";

  useEffect(() => {
    if (linktag) {
      setCopyLink(
        `<link
    rel="stylesheet"
    href="https://font-verse-api.onrender.com/api/font/style?fontFamily=${fontsList.join(
      ","
    )}"
  />
  
  @import url("https://font-verse-api.onrender.com/api/font/style?fontFamily=${fontsList.join(
    ","
  )}");
  
  `
      );
    } else {
      fontsList.map((f) => (copyText += `font-family: ${f}; `));
      setCopyLink(copyText);
    }
  }, [fontsList]);

  return (
    <div className="mb-10 z-[10]">
      <div className="flex justify-between items-center">
        <span className="text-xl">{title}</span>
        <IoCopyOutline
          className="text-xl"
          onClick={() => {
            copy(copyLink).then(alert("Copied!"));
          }}
        />
      </div>

      <div className="my-3 bg-tan p-5 rounded-3xl">
        {linktag ? (
          <>
            <span className="text-sm flex-wrap">
              {`
            <link
              rel="stylesheet"
              href="https://font-verse-api.onrender.com/api/font/style?fontFamily=${fontsList.join(
                ","
              )}"
            />
            
            `}
            </span>{" "}
            {/* <span className="text-sm flex-wrap">
              {`
          
            @import url("https://font-verse-api.onrender.com/api/font/style?fontFamily=${fontsList.join(
              ","
            )}");
            `}
            </span> */}
          </>
        ) : (
          fontsList.map((f) => (
            <span className="text-sm flex-wrap">
              {`font-family: ${f}; `} <br />
            </span>
          ))
        )}
      </div>
    </div>
  );
};

function Header() {
  const { selectedFonts, removeFromCollection, fetchFonts } = useFont();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  function showHeader() {
    const header = document.querySelector(".header");
    const extendedHeader = document.querySelector(".extended-header");

    // window.onscroll = () => {
    //   setShow(false);
    // };

    header.addEventListener("mouseover", () => {
      setShow(true);
    });
    extendedHeader.addEventListener("mouseover", () => {
      setShow(true);
    });
    extendedHeader.addEventListener("mouseout", () => {
      setShow(false);
    });
  }

  function searchFont() {
    fetchFonts("fontName", search);
  }

  useEffect(() => {
    if (selectedFonts.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [selectedFonts]);

  return (
    <nav className="sticky top-0 bg-white text-black w-full h-auto flex justify-center font-[Mattone] cursor-pointer">
      <div className="w-full max-w-6xl">
        {/* general header */}
        <div className={`${show && "border-b-2 border-gray"}`}>
          <div className=" z-20 text-sm flex flex-col md:flex-row items-center justify-center">
            {/* links 1 and 2 */}
            <ul className="md:flex items-center hidden">
              <li className="mx-3">Home</li>
              <li className="mx-3 text-xl">~</li>
              <li className="mx-3">About</li>
            </ul>
            {/* logo */}
            <div className="mx-6 md:my-0 my-5">
              <svg
                width="70"
                height="55.26"
                viewBox="0 0 171 146"
                fill="#212121"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.3243 145.7L0 0.574982H18.4865L87.8108 145.7L152.514 0.574982H171L106.297 145.7H87.8108H69.3243Z"
                  fill="#212121"
                />
                <path
                  d="M145.584 0.574982H25.4189L32.3514 17.5062H138.652L145.584 0.574982Z"
                  fill="#212121"
                />
                <path
                  d="M145.581 0.574982H25.4189L32.3514 17.5062H138.652L145.581 0.574982Z"
                  fill="#212121"
                />
                <path
                  d="M117.851 63.4626H55.1638L62.3922 77.9751H110.919L117.851 63.4626Z"
                  fill="#212121"
                />
              </svg>
            </div>
            {/* links 3 and 4 */}
            <ul className="md:flex items-center hidden">
              <li className="mx-3">Fonts</li>
              <li className="mx-3 text-xl">~</li>
              <li className="mx-3">License</li>
            </ul>

            {/* mobile view general header */}

            <ul className="show lg:hidden md:hidden text-base text-center mb-5">
              <li className="my-2">Home</li>
              <li className="my-2">About</li>
              <li className="my-2">Fonts</li>
              <li className="my-2">License</li>
            </ul>
          </div>
          <div
            className="w-full flex justify-center items-center text-3xl z-10"
            onClick={() => setShow(!show)}
          >
            <BsChevronCompactDown className="text-tan" />
          </div>
        </div>
        {/* background wave pattern */}
        {selectedFonts.length > 0 && (
          <svg
            height="256"
            viewBox="0 0 1445 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute w-full left-0 right-0 z-0 ${
              !show ? "hidden" : "block"
            }`}
          >
            <path
              d="M1 110.5C1 110.5 87 68.3856 448.5 117.943C810 167.5 1444 134.5 1444 134.5"
              stroke="#F8F6F3"
              strokeWidth="2"
            />
            <path
              d="M2.50024 33C2.50024 33 341.5 -39 721.75 33C1102 105 1441 33 1441 33"
              stroke="#F8F6F3"
              strokeWidth="2"
            />
            <path
              d="M3.50024 201C3.50024 201 425 291.5 802 237C1179 182.5 1444 237 1444 237"
              stroke="#F8F6F3"
              strokeWidth="2"
            />
          </svg>
        )}

        {/* extended header */}
        <div
          className={`extended-header mb-10 md:mx-0 mx-3 relative z-[10] ${
            !show ? "hidden" : "block"
          }`}
        >
          {/* search */}
          <div className="w-full h-16 flex items-center justify-between bg-white border-2 border-black rounded-3xl px-5 py-2 my-10 z-[10]">
            <input
              type="text"
              placeholder="Search font"
              className="w-full h-full outline-none text-base"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="ml-3 text-xl" onClick={searchFont} />
          </div>
          {/* user selection section */}
          {selectedFonts.length > 0 && (
            <div className="flex md:flex-row flex-col justify-between z-[10]">
              {/* left */}
              <div className="flex-1">
                <span className=" text-xl">Selected</span>
                {selectedFonts.map((font, index) => (
                  <FontSelected
                    key={index}
                    fontName={font}
                    removeFromCollection={removeFromCollection}
                  />
                ))}
              </div>
              {/* right */}
              <div className="flex-1">
                {/* copy link section */}
                <CopyBox
                  title="Copy Link"
                  fontsList={selectedFonts}
                  linktag={true}
                />
                {/* style guide section */}
                <CopyBox
                  title="Style Guide"
                  fontsList={selectedFonts}
                  linktag={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
