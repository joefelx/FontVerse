import { useContext } from "react";
import { FontContext } from "../context/FontContext";

import { generateRandomNum } from "../utils";

const useFont = () => {
  const { selectedFonts, fontsList, currentFont, dispatch } =
    useContext(FontContext);

  const fetchFonts = async (type, value) => {
    if (type === "fontWeight") {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/font?fontWeight=400`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_FONTS_LIST", payload: data });
        });
    } else if (type === "fontName") {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/font?fontName=${value}`)
        .then((response) => response.json())
        .then((data) => {
          setCurrentFont(data[0]);
        });
    } else {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/font/all`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_FONTS_LIST", payload: data });
        });
    }
  };

  const fetchAllFonts = async () => {
    console.log("fetch fonts");
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/font/all`
    );
    const data = await response.json();

    // await dispatch({ type: "SET_FONTS_LIST", payload: data });

    // await dispatch({
    //   type: "SET_CURRENT_FONT",
    //   payload: data[generateRandomNum(data.length)],
    // });
    return data;
  };

  const addToCollection = (font) => {
    !selectedFonts.includes(font) &&
      dispatch({
        type: "SET_SELECTED_FONTS",
        payload: [...selectedFonts, font],
      });
  };

  const removeFromCollection = (fontName) => {
    const temp = [];

    for (let i = 0; i < selectedFonts.length; i++) {
      if (selectedFonts[i] === fontName) {
        continue;
      }
      temp.push(selectedFonts[i]);
    }

    dispatch({
      type: "SET_SELECTED_FONTS",
      payload: temp,
    });
  };

  const setCurrentFont = (font) => {
    // console.log(font);
    dispatch({ type: "SET_CURRENT_FONT", payload: font });
    console.log(currentFont);
  };

  return {
    currentFont,
    selectedFonts,
    fontsList,
    fetchFonts,
    fetchAllFonts,
    // randomFetchFont,
    setCurrentFont,
    addToCollection,
    removeFromCollection,
    dispatch,
  };
};

export default useFont;
