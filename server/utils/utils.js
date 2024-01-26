const Font = require("../model/Font");

function WriteCSS(fontName, fontWeights, FORMATE_STRING, index) {
  if (index === fontWeights.length) {
    return FORMATE_STRING;
  }

  FORMATE_STRING += `
  @font-face {
    font-family: '${fontName}';
    src: url('${fontWeights[index].fontURL}') format('woff2');
    font-weight: ${fontWeights[index].fontWeight};
  }
  `;

  return WriteCSS(fontName, fontWeights, FORMATE_STRING, index + 1);
}

async function RenderFormatString(fontFamilyArray, FORMATE_STRING, index) {
  if (index === fontFamilyArray.length) {
    return FORMATE_STRING;
  }

  const fontFound = await Font.findOne({
    fontName: fontFamilyArray[index],
  });

  FORMATE_STRING = WriteCSS(
    fontFound.fontName,
    fontFound.fontWeights,
    FORMATE_STRING,
    0
  );

  return RenderFormatString(fontFamilyArray, FORMATE_STRING, index + 1);
}

async function RenderCSS(fontFamilyArray) {
  let FORMATE_STRING = "";

  FORMATE_STRING = await RenderFormatString(fontFamilyArray, FORMATE_STRING, 0);

  if (FORMATE_STRING.length > 0) {
    return Promise.resolve(FORMATE_STRING);
  }
}

module.exports = RenderCSS;
