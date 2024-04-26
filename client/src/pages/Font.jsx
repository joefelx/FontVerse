import FontAbout from "../components/FontAbout";
import { useParams } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

import useFont from "../hooks/useFont";
import { useEffect, useState } from "react";
import Capitalize from "../utils/capitalize";
import { FontLayout } from "../components";

function Font() {
  const { fetchFont } = useFont();
  const { fontName } = useParams();
  const [currentFont, setCurrentFont] = useState(null);

  useEffect(() => {
    (async () => {
      console.log(fontName);
      const data = await fetchFont(fontName);

      setCurrentFont(data);
    })();
  }, []);

  return (
    <div className="my-5 flex flex-col justify-center items-center w-full h-auto min-h-[110px] font-[Mattone] text-secondary md:px-0 px-2">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl min-h-screen m-auto">
        {currentFont != null ? (
          <>
            <FontLayout currentFont={currentFont} />
            <FontAbout currentFont={currentFont} />
          </>
        ) : (
          <div className="rotate-180">
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="#00a6ff"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Font;
