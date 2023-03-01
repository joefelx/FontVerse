import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="">
      <div className="h-full flex flex-col justify-between bg-dark-200 text-light">
        <div className="flex justify-around my-16">
          <div className="flex flex-col">
            <h1 className="text-3xl font-[Mattone] text-purple-500 mb-5">
              Follow Us
            </h1>
            <div className="flex justify-between items-center">
              <BsGithub
                fontSize={30}
                className="cursor-pointer hover:text-[#a6b1b7] "
              />
              <BsTwitter
                fontSize={30}
                className="cursor-pointer hover:text-[#1da1f2]"
              />
              <BsInstagram
                fontSize={30}
                className="cursor-pointer text-light overflow-hidden hover:text-purple-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <span className=" font-light text-sm ">
            &#169; Designed & Developed by{" "}
            <a className="font-[Mattone]">Joe Felix</a> &#8482;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
