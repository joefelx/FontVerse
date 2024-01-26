function fontWeightConversion(fontWeight) {
  if (typeof fontWeight === "object") {
    return parseInt(fontWeight[0].fontWeight);
  } else {
    return parseInt(fontWeight);
  }
}

export default fontWeightConversion;
