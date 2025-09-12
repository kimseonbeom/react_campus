import React, { useEffect, useState } from "react";
import { logo } from "../img";

function Loading() {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src={logo}
        alt="logo"
        height="120"
        width="240"
      />
    </div>
  );
}
export default Loading;