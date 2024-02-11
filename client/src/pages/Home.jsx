import { useEffect } from "react";

import { Font, FontAbout, FontLayout } from "../components";
import { generateRandomNum } from "../utils";

import useFont from "../hooks/useFont";

function Home() {
  const { fetchAllFonts, dispatch } = useFont();

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
    <div className="h-auto w-full bg-black">
      <Font />
      <FontLayout />
      <FontAbout />
    </div>
  );
}

export default Home;
