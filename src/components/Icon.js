import React from "react";
import icons from "./pluggins/icons";
import "../assets/styles/Icon.scss";

const Icon = ({ name, classes }) => {
  const iconRender = icons[name] || icons.default;
  return (
    <svg
      viewBox={iconRender.viewBox}
      className={`icon-svg ${classes ? classes : ""}`}
      title={`icons=${name}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconRender.path}
    </svg>
  );
};
export default Icon;
