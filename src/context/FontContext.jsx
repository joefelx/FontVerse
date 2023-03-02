import React, { useState } from "react";
import axios from "axios";

export const FontContext = React.createContext();

export const FontProvider = ({ children }) => {
  const [fontName, setFontName] = useState("");
  const [selectedFonts, setSelectedFonts] = useState([]);
  const [fontsList, setFontsList] = useState([]);

  const fetchFonts = async () => {
    await axios
      .get("http://localhost:5000/api/font/getfont?fontWeight=400")
      .then((res) => {
        console.log(res);
        setFontsList(res.data.data);
      });
  };

  const fetchFontByName = async () => {
    await axios
      .get(`http://localhost:5000/api/font/getfont?fontName=${fontName}`)
      .then((res) => {
        setFontsList(res.data.data);
      });
  };

  const addToCollection = (fontFamily, fontWeight) => {
    // const font = {
    //   fontFamily: fontFamily,
    //   fontWeight: fontWeight,
    // };

    !selectedFonts.includes(fontFamily) &&
      setSelectedFonts([...selectedFonts, fontFamily]);
  };

  const removeFromCollection = (index) => {
    const temp = [...selectedFonts];
    temp.splice(index, 1);
    setSelectedFonts(temp);
  };

  return (
    <FontContext.Provider
      value={{
        addToCollection,
        selectedFonts,
        setSelectedFonts,
        fontsList,
        setFontsList,
        fontName,
        setFontName,
        fetchFonts,
        fetchFontByName,
        removeFromCollection,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};
