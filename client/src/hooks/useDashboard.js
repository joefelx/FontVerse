import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useDashboard = () => {
  const { user, dispatch } = useContext(UserContext);

  async function handleSubmit(e, email, password) {
    e.preventDefault();
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
      dispatch({ type: "SET_USER", payload: data.data });
      window.localStorage.setItem(
        "fontverse-session",
        JSON.stringify(data.data)
      );
    }
  }

  function handleLogout() {
    window.localStorage.removeItem("fontverse-session");
    dispatch({ type: "SET_USER", payload: null });
  }

  function checkUser() {
    const user = window.localStorage.getItem("fontverse-session");
    dispatch({ type: "SET_USER", payload: JSON.parse(user) });
  }

  return { user, checkUser, handleSubmit, handleLogout };
};

export default useDashboard;
