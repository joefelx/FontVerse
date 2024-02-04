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
    } else if (type === "fontName") {
      await axios.get(`/font?fontName=${value}`).then((res) => {
        setCurrentFont(res.data[0]);
      });
    } else {
      const { data } = await axios.get("/font/all");
      dispatch({ type: "SET_FONTS_LIST", payload: data });
    }
  };

  const fetchAllFonts = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/font/all`)
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("fonts", JSON.stringify(data));
      })
      .then(() => {
        const fonts = window.localStorage.getItem("fonts");
        dispatch({ type: "SET_FONTS_LIST", payload: JSON.parse(fonts) });
      });
  };

  const randomFetchFont = async () => {
    const fonts = JSON.parse(window.localStorage.getItem("fonts"));
    setCurrentFont(fonts[generateRandomNum(fonts.length)]);
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
    currentFont,
    selectedFonts,
    fontsList,
    fetchFonts,
    fetchAllFonts,
    randomFetchFont,
    setCurrentFont,
    addToCollection,
    removeFromCollection,
  };
};

export default useFont;
