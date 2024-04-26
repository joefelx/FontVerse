import React, { useState } from "react";
import { useEffect } from "react";
import { LogoBG } from "../components/Logo";
import { GoHome } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useDashboard from "../hooks/useDashboard";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#005ac8] via-blue to-[#00e55b] inline-block text-transparent bg-clip-text";

const Layout = ({ children }) => {
  return (
    <div className="p-5 w-full flex flex-col justify-center items-center">
      <div className="w-3/4 h-full">{children}</div>
    </div>
  );
};

const Box = ({ font }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-2/3 h-40 flex justify-center items-center text-3xl border-2 border-gray rounded-xl my-5 overflow-hidden cursor-pointer hover:border-blue"
      onClick={() => navigate(`/${font.fontName}`)}
    >
      <h1 className="bg-gradient-to-r from-[#005ac8] via-blue to-[#00e55b] inline-block text-transparent bg-clip-text">
        {font.fontName}
      </h1>
    </div>
  );
};

const SideBar = ({ setCurrentTab, handleLogout }) => {
  return (
    <div className="p-5 min-h-screen h-full flex flex-col justify-between items-center bg-[rgb(0,0,0)]">
      {/* logo */}
      <LogoBG className="w-10 h-10" />
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

const Overview = ({ user, setCurrentTab }) => {
  return (
    <Layout>
      <div className="my-10">
        <h1 className="text-5xl">{user.name}</h1>
      </div>
      <hr className="border-t border-gray" />
      {/* Collections */}
      <div className="my-10">
        <span className="text-md">Font Collections</span>

        {/* font box */}
        <div className="flex items-center justify-between gap-10">
          {user.fonts.map((font) => (
            <Box key={font.id} font={font} />
          ))}

          <div
            className="w-2/3 h-40 flex justify-center items-center text-5xl border-2 border-gray rounded-xl my-5 overflow-hidden cursor-pointer hover:border-blue"
            onClick={() => setCurrentTab("upload")}
          >
            <h1 className="bg-gradient-to-r from-[#005ac8] via-blue to-[#00e55b] inline-block text-transparent bg-clip-text">
              +
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Login = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 font-[Mattone]">
      <a
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-white"
      >
        <LogoBG className="w-8 h-8 mr-2" />
        FontVerse
      </a>
      <div className="w-full bg-black rounded-2xl shadow border border-slate-900 md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-lg font-bold leading-tight tracking-tight md:text-lg text-white">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={(e) => handleSubmit(e, email, password)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="sm:text-sm rounded-lg block w-full p-2.5 bg-black border-2 border-slate-700 placeholder-gray text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="sm:text-sm rounded-lg block w-full p-2.5 bg-black border-2 border-slate-700 placeholder-gray text-white focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />
            </div>

            <button
              type="submit"
              className="w-full font-medium rounded-lg text-mdpx-5 py-2.5 text-center text-white bg-blue hover:bg-primary-700 focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FontUploadForm = () => {
  const uploadStates = [
    "font-name",
    "font-description",
    "font-weight-selection",
    "font-upload",
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [fontData, setFontData] = useState({
    fontName: "",
    fontDetails: "",
    fontWeight: "",
    price: "",
  });

  useEffect(() => {
    console.log(fontData);
  }, [fontData]);

  const Step1 = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="mb-10">
          <h1 className={`text-4xl ${GRADIENT_TEXT}`}>Upload Font</h1>
        </div>
        {/* Inputs */}
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col">
            <label htmlFor="fontName" className="text-sm m-2">
              Font name
            </label>
            <input
              className="border-2 border-gray rounded-lg w-[20rem] py-3 px-5 bg-black"
              type="text"
              name="fontName"
              placeholder="Poppins"
              onChange={(e) =>
                setFontData({
                  ...fontData,
                  fontName: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    );
  };

  const Step2 = () => {
    return <div>step2</div>;
  };
  const Step3 = () => {
    return <div>step3</div>;
  };
  const Step4 = () => {
    return <div>step4</div>;
  };

  return (
    <Layout>
      <div className="flex w-full h-full min-h-screen ">
        {/* States */}
        <div className="h-full min-h-screen w-36 py-5 flex flex-col justify-center items-center">
          {uploadStates.map((s, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span
                className={`flex justify-center items-center h-10 aspect-square rounded-full ${
                  currentStep === index
                    ? GRADIENT_TEXT
                    : "bg-transparent text-gray"
                }  `}
              >
                {index}
              </span>

              {index !== uploadStates.length - 1 && (
                <div className="w-0.5 h-7 bg-gray rounded-full my-3"></div>
              )}
            </div>
          ))}
        </div>

        <div className="h-full w-full place-content-center">
          {currentStep === 0 && <Step1 />}
          {currentStep === 1 && <Step2 />}
          {currentStep === 2 && <Step3 />}
          {currentStep === 3 && <Step4 />}

          <div className="w-full flex justify-center items-center gap-10 my-10">
            <div className="w-[20rem] flex flex-col gap-2 justify-between p-1">
              {currentStep < uploadStates.length - 1 && (
                <button
                  className="bg-blue py-2 px-9 rounded-xl"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                </button>
              )}

              {currentStep > 0 && (
                <button
                  className="bg-transparent text-gray py-2 px-9 rounded-xl hover:border hover:border-gray"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

function DashBoard() {
  const { user, checkUser, handleSubmit, handleLogout } = useDashboard();
  const [currentTab, setCurrentTab] = useState("overview");

  useEffect(() => {
    checkUser();
  }, []);

  if (!user) return <Login handleSubmit={handleSubmit} />;

  return (
    <div className="min-h-screen h-full bg-black text-white flex font-[Mattone]">
      {/* left */}
      <SideBar setCurrentTab={setCurrentTab} handleLogout={handleLogout} />
      {/* right */}
      {currentTab === "overview" && (
        <Overview user={user} setCurrentTab={setCurrentTab} />
      )}
      {currentTab === "upload" && <FontUploadForm />}
    </div>
  );
}

export default DashBoard;
