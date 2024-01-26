import axios from "axios";

const handleUpload = async ({ fontName, active, fontStyle, file }) => {
  let newFont = {
    fontName: fontName,
    fontDisplayName: fontName,
    price: "free",
    fontWeight: active,
    fontStyle: fontStyle,
  };

  if (file) {
    console.log(file);
    const data = new FormData();
    data.append("font", file[0]);

    try {
      const result = await axios.post("/font/uploadfile", data);
      console.log(result.data.filename);
      newFont.fontUrl = `https://api-fontverse.herokuapp.com/fonts/${result.data.filename}`;
    } catch (err) {
      console.log(err);
    }
  }

  try {
    const res = await axios.post("/font/upload", newFont);
  } catch (error) {
    console.log(error);
  }
};

export { handleUpload };
