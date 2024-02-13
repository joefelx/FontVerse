import Logo from "../assets/Fontverse Logo White.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-full flex justify-center font-[Mattone] py-5">
      <div className="w-full h-auto max-w-6xl text-white">
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

          <p className="text-xs text-white">
            Designed & Developed by{" "}
            <span className="hover:text-tan cursor-pointer ">Joe Felix</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
