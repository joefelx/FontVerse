const FontReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_FONT":
      return {
        ...state,
        currentFont: action.payload,
      };

    case "SET_SELECTED_FONTS":
      return {
        ...state,
        selectedFonts: action.payload,
      };

    case "SET_FONTS_LIST":
      return {
        ...state,
        fontsList: action.payload,
      };

    default:
      break;
  }
};

export default FontReducer;
