import { useState, useEffect } from "react";

import useFont from "../hooks/useFont";
import { IoCopyOutline, FiSearch } from "../components/Icons";
import { FaRegUser } from "react-icons/fa6";
import ExtendedHeader from "./headerComponents/ExtendedHeader";

import { CgClose } from "react-icons/cg";
import { PiRocketBold } from "react-icons/pi";
import { LogoBG } from "./Logo";
import { Link } from "react-router-dom";

// Components Used inside the Header

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search w-full flex items-center justify-between text-white border border-tan rounded-2xl px-5 py-4 z-[10]">
      <input
        type="text"
        placeholder="Search font"
        className="w-full h-full bg-transparent outline-none text-base"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to={`/font/${search.toLowerCase()}`}>
        <FiSearch className="ml-3 text-xl" />
      </Link>
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
              className="hover:text-blue cursor-pointer"
              onClick={() => setshowSearch(!showSearch)}
            >
              {showSearch ? <CgClose className="text-2xl" /> : <FiSearch />}
            </li>
            <li
              className="hover:text-blue cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <CgClose className="text-2xl" /> : <PiRocketBold />}
            </li>
            <Link to={"/dashboard"}>
              <li className="hover:text-blue cursor-pointer">
                <FaRegUser className="text-[1.3rem]" />
              </li>
            </Link>
          </ul>
        </div>

        {showSearch && <SearchBox search={search} setSearch={setSearch} />}

        {show && (
          <ExtendedHeader
            show={show}
            selectedFonts={selectedFonts}
            removeFromCollection={removeFromCollection}
          />
        )}
      </div>
    </nav>
  );
}

export default Header;
