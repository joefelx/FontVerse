import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { IoCopyOutline } from "../../components/Icons";

function ClipBoard({ title, fontsList, linktag }) {
  const [copyLink, setCopyLink] = useState("");

  let copyText = "";

  useEffect(() => {
    if (linktag === "html") {
      setCopyLink(
        `<link rel="stylesheet" href="${
          process.env.REACT_APP_SERVER_URL
        }/font/style?fontFamily=${fontsList.join(",")}"/>`
      );
    }

    if (linktag === "css") {
      setCopyLink(
        `@import url("${
          process.env.REACT_APP_SERVER_URL
        }/font/style?fontFamily=${fontsList.join(",")}");`
      );
    }

    if (linktag === "fontfamilies") {
      fontsList.map((f) => (copyText += `font-family: ${f}; `));
      setCopyLink(copyText);
    }
  }, [fontsList]);

  return (
    <div className="mb-10 z-[10]">
      <div className="flex justify-between items-center">
        <span className="text-md text-gray">{title}</span>
        <IoCopyOutline
          className="text-lg cursor-pointer hover:text-blue"
          onClick={() => {
            copy(copyLink);
            toast.success("Copied!");
          }}
        />
      </div>

      <div className="my-3 bg-darkGray text-white p-4 rounded-3xl">
        {linktag === "html" ? (
          <span className="text-xs flex-wrap">
            {`
              <link
                rel="stylesheet"
                href="${
                  process.env.REACT_APP_SERVER_URL
                }/font/style?fontFamily=${fontsList.join(",")}"
              />
              
              `}
          </span>
        ) : linktag === "css" ? (
          <span className="text-xs flex-wrap">
            {`
            
              @import url("${
                process.env.REACT_APP_SERVER_URL
              }/font/style?fontFamily=${fontsList.join(",")}");
              `}
          </span>
        ) : (
          fontsList.map((f) => (
            <span className="text-xs flex-wrap">
              {`font-family: ${f}; `} <br />
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default ClipBoard;
