import React from "react";
import Icons from "../../images/icons/sprite.svg";
import { useTheme } from "styled-components";

const Icon = ({
  name,
  width = "100%",
  height = "100%",
  fill,
  stroke,
  style,
}) => {
  const theme = useTheme();
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={theme[stroke]}
      style={style}
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
