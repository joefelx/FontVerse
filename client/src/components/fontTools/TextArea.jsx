import { useState } from "react";

function TextArea({
  currentFont,
  fontWeight,
  fontSize,
  alignment,
  letterCase,
}) {
  const [text, setText] = useState(currentFont.fontName);

  function autoExpandTextBox() {
    const textarea = document.getElementById("textarea");
    const heightLimit = 200;

    textarea.oninput = function () {
      textarea.style.height = "";
      textarea.style.height =
        Math.min(textarea.scrollHeight, heightLimit) + "px";
    };
  }

  return (
    <textarea
      spellCheck={false}
      id="textarea"
      placeholder="Write your text"
      style={{
        fontFamily: currentFont?.fontName,
        fontWeight:
          fontWeight === "100"
            ? 100
            : fontWeight === "200"
            ? 200
            : fontWeight === "300"
            ? 300
            : fontWeight === "400"
            ? 400
            : fontWeight === "500"
            ? 500
            : fontWeight === "600"
            ? 600
            : fontWeight === "700"
            ? 700
            : fontWeight === "800"
            ? 800
            : 900,
        fontSize: fontSize + "px",
      }}
      className={`outline-none mt-10 h-auto flex w-full bg-black text-white placeholder:text-gray ${
        alignment === "right"
          ? " text-right"
          : alignment === "center"
          ? "text-center"
          : "text-left"
      } 
${
  letterCase === "upper"
    ? "uppercase"
    : letterCase === "cap"
    ? "capitalize"
    : "lowercase"
}
`}
      onChange={(e) => {
        setText(e.target.value);
        autoExpandTextBox();
      }}
      value={text}
    />
  );
}

export default TextArea;
