import { useEffect } from "react";

import { Font, FontAbout, FontLayout } from "../components";
import { generateRandomNum } from "../utils";

import useFont from "../hooks/useFont";

function Home() {
  const { fetchAllFonts, fontsList, dispatch } = useFont();

  useEffect(() => {
    (async () => {
      const data = await fetchAllFonts();
      dispatch({ type: "SET_FONTS_LIST", payload: data });

      dispatch({
        type: "SET_CURRENT_FONT",
        payload: data[generateRandomNum(data.length)],
      });
    })();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-auto w-full bg-black">
      {/* <Font /> */}
      {fontsList.map((f) => (
        <FontLayout currentFont={f} />
      ))}
    </div>
  );
}

export default Home;
