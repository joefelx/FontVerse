import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import useFont from "../hooks/useFont";
import {
  IoCopyOutline,
  FiSearch,
  BsChevronCompactDown,
} from "../components/Icons";
import { LogoB } from "./Logo";

// Components Used inside the Header
const FontSelected = ({ font, removeFromCollection }) => {
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
          removeFromCollection(font);
        }}
      >
        <path
          d="M8.5 16L14.125 21.625L23.5 10.375M1 25V7C1 4.9 1 3.85 1.40875 3.0475C1.76875 2.34063 2.34063 1.76875 3.0475 1.40875C3.85 1 4.9 1 7 1H25C27.1 1 28.15 1 28.9506 1.40875C29.6575 1.76875 30.2312 2.34063 30.5912 3.0475C31 3.84812 31 4.89812 31 6.99438V25.0075C31 27.1038 31 28.1519 30.5912 28.9525C30.231 29.6582 29.6567 30.2318 28.9506 30.5912C28.15 31 27.1019 31 25.0056 31H6.99438C4.89812 31 3.84812 31 3.0475 30.5912C2.34192 30.2317 1.76827 29.6581 1.40875 28.9525C1 28.15 1 27.1 1 25Z"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-4xl ml-5">{font}</span>
    </div>
  );
};

const CopyBox = ({ title, fontsList, linktag }) => {
  const [copyLink, setCopyLink] = useState("");

  let copyText = "";

  useEffect(() => {
    if (linktag === "html") {
      setCopyLink(
        `<link rel="stylesheet" href="${
          process.env.REACT_APP_SERVER_URL
        }/font/style?fontFamily=${fontsList.join(",")}"/>`
      );
    }

    if (linktag === "css") {
      setCopyLink(
        `@import url("${
          process.env.REACT_APP_SERVER_URL
        }/font/style?fontFamily=${fontsList.join(",")}");`
      );
    }

    if (linktag === "fontfamilies") {
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
            copy(copyLink);
            alert("copied");
          }}
        />
      </div>

      <div className="my-3 bg-tan p-5 rounded-3xl">
        {linktag === "html" ? (
          <span className="text-sm flex-wrap">
            {`
            <link
              rel="stylesheet"
              href="${
                process.env.REACT_APP_SERVER_URL
              }/font/style?fontFamily=${fontsList.join(",")}"
            />
            
            `}
          </span>
        ) : linktag === "css" ? (
          <span className="text-sm flex-wrap">
            {`
          
            @import url("${
              process.env.REACT_APP_SERVER_URL
            }/font/style?fontFamily=${fontsList.join(",")}");
            `}
          </span>
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

const Waves = ({ show }) => {
  return (
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
  );
};

const SearchBox = ({ searchFont, setSearch }) => {
  return (
    <div className="w-full h-16 flex items-center justify-between bg-white border-2 border-black rounded-3xl px-5 py-2 my-10 z-[10]">
      <input
        type="text"
        placeholder="Search font"
        className="w-full h-full outline-none text-base"
        onChange={(e) => setSearch(e.target.value)}
      />
      <FiSearch className="ml-3 text-xl" onClick={searchFont} />
    </div>
  );
};

const ExtendedHeader = ({ show, selectedFonts, removeFromCollection }) => {
  return (
    <div
      className={`w-full p-5 mb-10 md:mx-0 mx-3 relative z-[10] ${
        !show ? "hidden" : "block"
      }`}
    >
      {/* user selection section */}
      {selectedFonts.length > 0 && (
        <div className="flex md:flex-row flex-col justify-between z-[10]">
          {/* left */}
          <div className="flex-1">
            <span className=" text-xl">Selected</span>
            {selectedFonts.map((font, index) => (
              <FontSelected
                key={index}
                font={font}
                removeFromCollection={removeFromCollection}
              />
            ))}
          </div>
          {/* right */}
          <div className="flex-1">
            {/* copy link section */}
            <CopyBox title="HTML" fontsList={selectedFonts} linktag="html" />
            <CopyBox title="CSS" fontsList={selectedFonts} linktag="css" />
            {/* style guide section */}
            <CopyBox
              title="Style Guide"
              fontsList={selectedFonts}
              linktag="fontfamilies"
            />
          </div>
        </div>
      )}
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
    <nav className="sticky top-0 text-black w-full h-auto flex justify-center font-[Mattone] cursor-pointer">
      {/* general header */}
      <div className="bg-white w-full max-w-6xl flex flex-col justify-center items-center rounded-2xl">
        <div
          className={`p-5 my-2 rounded-2xl w-full z-20 text-sm flex items-center ${
            !show && "shadow-md shadow-black/5"
          }`}
          onClick={() => setShow(!show)}
        >
          {/* logo */}
          <div className="flex items-center justify-center">
            <LogoB className="w-9 h-9" />
            <span className="mx-1 text-2xl">FontVerse</span>
          </div>
          {/* links 1 and 2 */}
          <ul className="flex">
            <li className="mx-3">Home</li>
            <li className="mx-3">About</li>
            <li className="mx-3">Fonts</li>
            <li className="mx-3">License</li>
          </ul>
        </div>

        <ExtendedHeader
          show={show}
          selectedFonts={selectedFonts}
          removeFromCollection={removeFromCollection}
        />
      </div>
    </nav>
  );
}

export default Header;
