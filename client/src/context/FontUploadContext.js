import { createContext, useState } from "react";

export const FontUploadContext = createContext();

export function FontUploadProvider({ children }) {
  const uploadStates = [
    "font-name",
    "font-description",
    "font-weight-selection",
    "font-upload",
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const [fontData, setFontData] = useState({
    fontName: "",
    fontSlug: "",
    fontDetail: "",
    price: "",
  });
  const [fontWeights, setFontWeights] = useState([]);

  function convertToSlug(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
  }

  function NextStep() {
    setCurrentStep(currentStep + 1);
  }

  function PreviousStep() {
    setCurrentStep(currentStep - 1);
  }

  function UpdateFontName(fontName) {
    setFontData({
      ...fontData,
      fontName: fontName,
      fontSlug: convertToSlug(fontName),
    });
  }
  function UpdateFontDetail(fontDetail) {
    setFontData({
      ...fontData,
      fontDetail: fontDetail,
    });
  }
  function UpdateFontSlug(fontSlug) {
    setFontData({
      ...fontData,
      fontSlug: fontSlug,
    });
  }

  function PushFontWeights(fontWeight, fontWeightName, fontFile) {
    setFontWeights([
      ...fontWeights,
      {
        fontWeight,
        fontWeightName,
        fontFile,
      },
    ]);

    return;
  }

  return (
    <FontUploadContext.Provider
      value={{
        uploadStates,
        currentStep,
        fontData,
        fontWeights,
        NextStep,
        PreviousStep,
        UpdateFontName,
        UpdateFontDetail,
        UpdateFontSlug,
        PushFontWeights,
      }}
    >
      {children}
    </FontUploadContext.Provider>
  );
}
