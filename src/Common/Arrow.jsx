import React from "react";
import btnarrow from "../Images/button-arrow-right.svg";

export default function Arrow({ py = 0 }) {
  return (
    <div className={`my-${py}`}>
      <img src={btnarrow} className="h-11 w-11 bg-yellow rounded-full" alt="" />
    </div>
  );
}
