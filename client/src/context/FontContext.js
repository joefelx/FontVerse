import React, { useReducer } from "react";
import FontReducer from "./reducers/FontReducer";

export const FontContext = React.createContext();

const INITIAL_STATE = {
  currentFont: {},
  selectedFonts: [],
  fontsList: [],
};

export const FontProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FontReducer, INITIAL_STATE);

  return (
    <FontContext.Provider
      value={{
        selectedFonts: state.selectedFonts,
        fontsList: state.fontsList,
        currentFont: state.currentFont,
        dispatch,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};
