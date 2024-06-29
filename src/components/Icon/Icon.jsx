import React from "react";
import Icons from "../../images/icons/sprite.svg";

const Icon = ({
  name,
  width = "100%",
  height = "100%",
  fill,
  stroke,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      style={style}
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
