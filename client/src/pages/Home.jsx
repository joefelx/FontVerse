import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

import { FontLayout } from "../components";
import { generateRandomNum } from "../utils";

import useFont from "../hooks/useFont";
import Loader from "../components/Loader";

function Home() {
  const { fetchAllFonts, fontsList, dispatch } = useFont();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchAllFonts();
      dispatch({ type: "SET_FONTS_LIST", payload: data });

      dispatch({
        type: "SET_CURRENT_FONT",
        payload: data[generateRandomNum(data.length)],
      });
      setLoading(false);
    })();
  }, []);

  const RenderFonts = () => {
    return (
      <>
        {fontsList.map((f) => (
          <FontLayout currentFont={f} />
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto min-h-screen w-full">
      {loading ? <Loader /> : <RenderFonts />}
    </div>
  );
}

export default Home;
