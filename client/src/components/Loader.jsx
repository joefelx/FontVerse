import React from "react";
import { Triangle } from "react-loader-spinner";

function Loader() {
  return (
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
  );
}

export default Loader;
