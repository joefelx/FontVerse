import React, { useReducer } from "react";
import UserReducer from "./reducers/UserReducer";

export const UserContext = React.createContext();

const INITIAL_STATE = {
  user: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
