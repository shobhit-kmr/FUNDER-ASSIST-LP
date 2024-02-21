import React from "react";
import btnarrow from "../Images/button-arrow-right-white.svg";

export default function BlueArrow({ py = 0 }) {
  return (
    <div className={`my-${py}`}>
      <img src={btnarrow} className="h-11 w-11 bg-blue rounded-full" alt="" />
    </div>
  );
}
