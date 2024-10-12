class Render {
  FORMATE_STRING;

  constructor() {
    this.FORMATE_STRING = "";
    this.writeStyle = this.writeStyle.bind(this);
    this.renderStyle = this.renderStyle.bind(this);
  }

  writeStyle(fontFamilyArray) {
    for (let font of fontFamilyArray) {
      for (let fontWeight of font.fontWeights) {
        this.FORMATE_STRING += `
      @font-face {
        font-family: '${font.fontName}';
        src: url('${fontWeight.fontURL}') format('woff2');
        font-weight: ${fontWeight.fontWeight};
      }
      `;
      }
    }
  }

  async renderStyle(fontFamilyArray) {
    this.resetFormatString();
    this.writeStyle(fontFamilyArray);
    return Promise.resolve(this.FORMATE_STRING);
  }

  resetFormatString() {
    this.FORMATE_STRING = "";
  }
}

let render = new Render();

module.exports = render.renderStyle;
