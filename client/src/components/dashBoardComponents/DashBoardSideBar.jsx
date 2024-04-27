import { GoHome } from "react-icons/go";
import { LogoBG } from "../Logo";
import { LuUser } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = ({ setCurrentTab, handleLogout }) => {
  return (
    <div className="w-20 py-5 min-h-screen h-full flex flex-col justify-between items-center bg-[rgb(0,0,0)]">
      {/* logo */}
      <Link to={"/"}>
        <div className="w-full h-full">
          <LogoBG className="w-10 h-10 cursor-pointer" />
        </div>
      </Link>
      {/* menu */}
      <ul className="flex flex-col justify-center items-center gap-5">
        <li
          className="text-3xl cursor-pointer hover:text-blue"
          title="Home"
          onClick={() => setCurrentTab("overview")}
        >
          <GoHome />
        </li>
        <li className="text-3xl cursor-pointer hover:text-blue" title="Profile">
          <LuUser />
        </li>
      </ul>
      {/* signout */}
      <div>
        <span
          className="text-3xl cursor-pointer hover:text-blue"
          title="Logout"
          onClick={handleLogout}
        >
          <AiOutlineLogout />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
