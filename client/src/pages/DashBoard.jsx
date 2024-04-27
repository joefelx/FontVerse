import React, { useState } from "react";
import { useEffect } from "react";

import useDashboard from "../hooks/useDashboard";
import { FontUploadProvider } from "../context/FontUploadContext";
import FontUploadForm from "../components/dashBoardComponents/FontUploadForm";
import Overview from "../components/dashBoardComponents/DashBoardOverview";
import SideBar from "../components/dashBoardComponents/DashBoardSideBar";

import { LogoBG } from "../components/Logo";

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
      <FontUploadProvider>
        {currentTab === "upload" && (
          <FontUploadForm setCurrentTab={setCurrentTab} />
        )}
      </FontUploadProvider>
    </div>
  );
}

export default DashBoard;
