import Logo from "../assets/Fontverse Logo White.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black w-full h-52 flex justify-center font-[Mattone] py-5">
      <div className="w-full h-full max-w-6xl flex flex-col justify-between text-white">
        {/* top */}
        <div className="flex justify-between items-center">
          <div className=" w-14 aspect-square object-contain">
            <Link to="/">
              <img className="w-full cursor-pointer" src={Logo} alt="Logo" />
            </Link>
          </div>
          {/* right */}
          <ul className="flex gap-6">
            <li className="text-sm cursor-pointer my-1 hover:text-tan">
              <a href="https://github.com/joefelx/FontVerse" target="_blank">
                Github
              </a>
            </li>
            <li className="text-sm cursor-pointer my-1 hover:text-tan">
              About
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center my-2">
        <p className="text-xs text-gray">
            Designed & Developed by{" "}
            <span className="hover:text-tan cursor-pointer ">Joe Felix</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
