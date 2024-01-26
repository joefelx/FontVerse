import { useContext } from "react";
import { FontContext } from "../context/FontContext";
import axios from "../axios/axios";

import { generateRandomNum } from "../utils";

const useFont = () => {
  const { selectedFonts, fontsList, currentFont, dispatch } =
    useContext(FontContext);

  const fetchFonts = async (type, value) => {
    if (type === "fontWeight") {
      await axios.get("/font?fontWeight=400").then((res) => {
        dispatch({ type: "SET_FONTS_LIST", payload: res.data });
      });
    } else {
      await axios.get(`/font?fontName=${value}`).then((res) => {
        console.log(res.data[0]);
        dispatch({ type: "SET_CURRENT_FONT", payload: res.data[0] });
      });
    }
  };

  const randomFetchFont = async () => {
    await axios.get("/font/all").then((res) => {
      setCurrentFont(res.data[generateRandomNum(res.data.length)]);
    });
  };

  const addToCollection = (fontFamily) => {
    !selectedFonts.includes(fontFamily) &&
      dispatch({
        type: "SET_SELECTED_FONTS",
        payload: [...selectedFonts, fontFamily],
      });
  };

  const removeFromCollection = (index) => {
    const temp = [...selectedFonts];
    temp.splice(index, 1);
    dispatch({
      type: "SET_SELECTED_FONTS",
      payload: temp,
    });
  };

  const setCurrentFont = (font) => {
    dispatch({ type: "SET_CURRENT_FONT", payload: font });
  };

  return {
    fetchFonts,
    randomFetchFont,
    selectedFonts,
    fontsList,
    currentFont,
    setCurrentFont,
    addToCollection,
    removeFromCollection,
  };
};

export default useFont;
