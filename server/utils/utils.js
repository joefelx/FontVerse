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

async function RenderFormatString(
  requested,
  fontFamilyArray,
  FORMATE_STRING,
  index
) {
  if (index === fontFamilyArray.length) {
    return FORMATE_STRING;
  }

  if (requested) {
    FORMATE_STRING = WriteCSS(
      fontFamilyArray[index].fontName,
      fontFamilyArray[index].fontWeights,
      FORMATE_STRING,
      0
    );
  } else {
    const fontFound = await Font.findOne({
      fontName: fontFamilyArray[index],
    });

    FORMATE_STRING = WriteCSS(
      fontFound.fontName,
      fontFound.fontWeights,
      FORMATE_STRING,
      0
    );
  }

  return RenderFormatString(
    requested,
    fontFamilyArray,
    FORMATE_STRING,
    index + 1
  );
}

async function RenderCSS(fontFamilyArray, requested) {
  let FORMATE_STRING = "";

  FORMATE_STRING = await RenderFormatString(
    requested,
    fontFamilyArray,
    FORMATE_STRING,
    0
  );

  if (FORMATE_STRING.length > 0) {
    return Promise.resolve(FORMATE_STRING);
  }
}

module.exports = RenderCSS;
