import { useContext } from "react";
import { FontContext } from "../context/FontContext";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";

const useFont = () => {
  const { selectedFonts, fontsList, currentFont, dispatch } =
    useContext(FontContext);

  const { user } = useContext(UserContext);

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

  const uploadFonts = async (fontData, fontWeights) => {
    try {
      // Object { fontName: "Poppins", fontSlug: "poppins", fontDetail: "sfa", price: "" }

      // fontFile: File { name: "OpenSans-Medium.woff2", lastModified: 1710679395676, size: 59740, … }
      // ​​
      // fontWeight: "100"
      // ​​

      // fontWeightName: "Thin"

      async function handleFontUpload(fontWeightObject) {
        console.log(fontWeightObject);
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
              Authorization: "65bf183d79903b409ca30089",
            },
          }
        );
        const data = await response.json();

        console.log(data);

        return data;
      }

      let i = 0;

      while (i < fontWeights.length) {
        const result = await handleFontUpload(fontWeights[i]);

        if (result) {
          i++;
        }
      }

      console.log(fontData, fontWeights);
    } catch (error) {
      console.log(error);
    }
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
    dispatch,
  };
};

export default useFont;
