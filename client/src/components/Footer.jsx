import Logo from "../assets/Logo Grid.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black w-full h-auto flex justify-center font-[Mattone]">
      <div className="w-full h-full max-w-6xl flex flex-col justify-between  text-white">
        {/* top */}
        <div className="py-10 flex md:flex-row flex-col justify-between items-center">
          <p className="flex text-xs text-gray md:my-0 my-5">
            Designed & Developed by{" "}
            <span className="hover:text-tan cursor-pointer ">Joe Felix</span>
          </p>
          {/* right */}
          <ul className="flex gap-6 uppercase">
            <li className="text-xs cursor-pointer my-1 hover:text-tan">
              <a
                href="https://github.com/joefelx/FontVerse"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="text-xs cursor-pointer my-1 hover:text-tan">
              <a
                href="https://github.com/joefelx/FontVerse?tab=readme-ov-file#-about-"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full py-10 border-t border-gray flex items-center justify-center">
          <div className="w-14 aspect-square object-contain">
            <Link to="/">
              <img className="w-full cursor-pointer" src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
