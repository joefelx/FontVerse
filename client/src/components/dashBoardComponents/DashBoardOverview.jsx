import { useNavigate } from "react-router";
import Layout from "./DashboardLayout";
import { useEffect, useState } from "react";
import useFont from "../../hooks/useFont";

const Box = ({ font }) => {
  const navigate = useNavigate();
  return (
    <div
      className="col-span-1 w-80 h-40 flex justify-center items-center text-3xl border-2 border-gray rounded-xl my-5 overflow-hidden cursor-pointer hover:border-blue"
      onClick={() => navigate(`/font/${font.fontName}`)}
    >
      <h1 className="bg-gradient-to-r from-[#005ac8] via-blue to-[#00e55b] inline-block text-transparent bg-clip-text">
        {font.fontName}
      </h1>
    </div>
  );
};

const Overview = ({ user, setCurrentTab }) => {
  const [fonts, setFonts] = useState([]);
  const { getFontFromUser } = useFont();

  useEffect(() => {
    (async () => {
      const f = await getFontFromUser();
      setFonts(f);
    })();
  }, []);

  return (
    <Layout>
      <div className="my-10">
        <h1 className="text-5xl">{user.name}</h1>
      </div>
      <hr className="border-t border-gray" />
      {/* Collections */}
      <div className="my-10">
        <span className="text-md">Font Collections</span>

        {/* font box */}
        <div className="grid grid-cols-3">
          {fonts.map((font) => (
            <Box key={font.id} font={font} />
          ))}

          <div
            className="col-span-1 w-80 h-40 flex justify-center items-center text-5xl border-2 border-gray rounded-xl my-5 overflow-hidden cursor-pointer hover:border-blue"
            onClick={() => setCurrentTab("upload")}
          >
            <h1 className="bg-gradient-to-r from-[#005ac8] via-blue to-[#00e55b] inline-block text-transparent bg-clip-text">
              +
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
