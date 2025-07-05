import React, { useContext, useState } from "react";
import { useEffect } from "react";

import { FontUploadProvider } from "../context/FontUploadContext";
import FontUploadForm from "../components/dashBoardComponents/FontUploadForm";
import Overview from "../components/dashBoardComponents/DashBoardOverview";
import SideBar from "../components/dashBoardComponents/DashBoardSideBar";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

function DashBoard() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(UserContext);

  const { handleLogout } = useAuth();
  const [currentTab, setCurrentTab] = useState("overview");

  useEffect(() => {
    const userSession = window.localStorage.getItem("fontverse-session");
    console.log(userSession);

    dispatch({ type: "SET_USER", payload: JSON.parse(userSession) });
  }, []);

  if (!user) {
    navigate("/auth");
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {user && (
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
      )}
    </>
  );
}

export default DashBoard;
