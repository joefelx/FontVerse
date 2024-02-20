import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import useFont from "../hooks/useFont";
import { IoCopyOutline, FiSearch } from "../components/Icons";

import { CgClose } from "react-icons/cg";
import { PiRocketBold } from "react-icons/pi";
import { LogoBG } from "./Logo";
import { Link } from "react-router-dom";

// Components Used inside the Header
const FontSelected = ({ font, removeFromCollection }) => {
  return (
    <div className="flex my-3 z-[10]">
      {/* checkbox */}
      <svg
        width="25"
        height="25"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
        <span className="text-md text-gray">{title}</span>
        <IoCopyOutline
          className="text-lg"
          onClick={() => {
            copy(copyLink);
            toast.success("Copied!");
          }}
        />
      </div>

      <div className="my-3 bg-darkGray text-white p-4 rounded-3xl">
        {linktag === "html" ? (
          <span className="text-xs flex-wrap">
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
          <span className="text-xs flex-wrap">
            {`
          
            @import url("${
              process.env.REACT_APP_SERVER_URL
            }/font/style?fontFamily=${fontsList.join(",")}");
            `}
          </span>
        ) : (
          fontsList.map((f) => (
            <span className="text-xs flex-wrap">
              {`font-family: ${f}; `} <br />
            </span>
          ))
        )}
      </div>
    </div>
  );
};

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search w-full flex items-center justify-between text-white border border-tan rounded-2xl px-5 py-4 z-[10]">
      <input
        type="text"
        placeholder="Search font"
        className="w-full h-full bg-transparent outline-none text-base"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to={`/${search}`}>
        <FiSearch className="ml-3 text-xl" />
      </Link>
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

      {selectedFonts.length > 0 ? (
        <div className="flex md:flex-row flex-col justify-between z-[10]">
          {/* left */}
          <div className="flex-1">
            <span className="text-gray text-xl">Selected</span>
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
      ) : (
        <span className="text-gray">No fonts selected</span>
      )}
    </div>
  );
};


function Header() {
  const { selectedFonts, removeFromCollection } = useFont();
  const [show, setShow] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (selectedFonts.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [selectedFonts]);

  return (
    <nav className="header sticky top-0 z-50 text-white bg-transparent  w-full h-auto flex justify-center font-[Mattone] ">
      {/* general header */}
      <div
        className={`bg-black/50 backdrop-blur-lg w-full max-w-6xl my-2 flex flex-col justify-center items-center rounded-2xl  ${
          !show && "shadow-md shadow-black/5"
        }`}
      >
        <div className="px-5 py-4 rounded-2xl w-full z-20 text-sm flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <div className="flex justify-center items-center">
              <LogoBG className="w-8 h-8" />
              <span className="mx-1 text-2xl">FontVerse</span>
            </div>
          </Link>
          {/* links 1 and 2 */}
          <ul className="flex gap-4 text-2xl">
            <li
              className="hover:text-tan cursor-pointer"
              onClick={() => setshowSearch(!showSearch)}
            >
              <FiSearch />
            </li>
            <li
              className="hover:text-tan cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <CgClose className="text-2xl" /> : <PiRocketBold />}
            </li>
          </ul>
        </div>

        {showSearch && <SearchBox search={search} setSearch={setSearch} />}

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
