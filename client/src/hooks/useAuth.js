import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useAuth = () => {
  const { user, dispatch } = useContext(UserContext);

  async function handleLogin(email, password) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/user/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (data.logged) {
      window.localStorage.setItem(
        "fontverse-session",
        JSON.stringify(data.data)
      );
      return true;
    }
    return false;
  }
  async function handleRegister(email, name, password) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/user/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (data.logged) {
      window.localStorage.setItem(
        "fontverse-session",
        JSON.stringify(data.data)
      );
      return true;
    }
    return false;
  }

  function handleLogout() {
    window.localStorage.removeItem("fontverse-session");
    dispatch({ type: "SET_USER", payload: null });
  }

  function checkUser() {
    const user = window.localStorage.getItem("fontverse-session");
    dispatch({ type: "SET_USER", payload: JSON.parse(user) });
  }

  return { user, checkUser, handleLogin, handleRegister, handleLogout };
};

export default useAuth;
