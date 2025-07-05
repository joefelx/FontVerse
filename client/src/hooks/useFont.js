import { useContext } from "react";
import { FontContext } from "../context/FontContext";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";
import useAuth from "./useAuth";

const useFont = () => {
  const { selectedFonts, fontsList, currentFont, dispatch } =
    useContext(FontContext);

  // const { user } = useAuth();

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
  };

  const uploadFonts = async (fontData, fontWeights) => {
    try {
      async function handleFontUpload(fontWeightObject) {
        const formData = new FormData();
        formData.append("fontName", fontData.fontName);
        formData.append("fontSlug", fontData.fontSlug);
        formData.append("fontDetail", fontData.fontName);
        formData.append("fontWeight", fontWeightObject.fontWeight);
        formData.append("fontWeightName", fontWeightObject.fontWeightName);
        formData.append("font", fontWeightObject.fontFile);

        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/font/new`,
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: "66ec5503f64e11759c23c1a4",
            },
          }
        );
        const data = await response.json();
        return data;
      }

      let i = 0;

      while (i < fontWeights.length) {
        const result = await handleFontUpload(fontWeights[i]);

        if (result) {
          i++;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFontFromUser = async (user) => {
    console.log(user);

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/font/${user._id}`
    );
    const fonts = await response.json();

    return fonts;
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
    uploadFonts,
    getFontFromUser,
    dispatch,
  };
};

export default useFont;
