import Logo from "../assets/Fontverse Logo White.png";

function Footer() {
  return (
    <div className="w-full h-full flex justify-center font-[Mattone] py-5">
      <div className="w-full h-auto max-w-6xl bg-black text-white px-16 pt-10 rounded-3xl border border-tan">
        {/* top */}
        <div className="flex justify-between items-center">
          {/* left */}
          <ul className="flex flex-col text-base">
            <li className="text-sm cursor-pointer my-1">Home</li>
            <li className="text-sm cursor-pointer my-1">About</li>
          </ul>
          {/* center Logo*/}
          <div className=" w-20 h-20 object-contain">
            <img className="w-full" src={Logo} alt="Logo" />
          </div>
          {/* right */}
          <ul className="flex flex-col">
            <li className="text-sm cursor-pointer my-1">Fonts</li>
            <li className="text-sm cursor-pointer my-1">License</li>
          </ul>
        </div>
        {/* bottom */}
        <div className="flex justify-center items-center border-t border-black py-10 text-xs">
          <p>
            Designed & Developed by{" "}
            <span className="hover:text-tan cursor-pointer">Joe Felix</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
