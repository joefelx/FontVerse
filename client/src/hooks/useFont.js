import { useContext } from "react";
import { FontContext } from "../context/FontContext";
import toast from "react-hot-toast";

const useFont = () => {
  const { selectedFonts, fontsList, currentFont, dispatch } =
    useContext(FontContext);

  const fetchFont = async (fontName) => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/font?fontName=${fontName}`
    );
    const data = await response.json();
    return data[0];
  };

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
          dispatch({
            type: "SET_CURRENT_FONT",
            payload: data[0],
          });
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
    console.log(process.env.REACT_APP_SERVER_URL);
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/font/all`
    );
    const data = await response.json();
    return data;
  };

  const addToCollection = (fontName) => {
    if (!selectedFonts.includes(fontName)) {
      toast("Added to the Capsule", {
        icon: "🚀",
      });

      dispatch({
        type: "SET_SELECTED_FONTS",
        payload: [...selectedFonts, fontName],
      });
    } else {
      toast("Already Exist in the Capsule", {
        icon: "😃",
      });
    }
  };

  const removeFromCollection = (fontName) => {
    const temp = selectedFonts.filter((font) => {
      return font !== fontName;
    });

    toast("Removed from the Capsule", {
      icon: "🫡",
    });

    dispatch({
      type: "SET_SELECTED_FONTS",
      payload: temp,
    });
  };

  const setCurrentFont = (font) => {
    dispatch({ type: "SET_CURRENT_FONT", payload: font });
    console.log(currentFont);
  };

  return {
    currentFont,
    selectedFonts,
    fontsList,
    fetchFont,
    fetchFonts,
    fetchAllFonts,
    setCurrentFont,
    addToCollection,
    removeFromCollection,
    dispatch,
  };
};

export default useFont;
