import React, { useState } from "react";
import {
  MoonSvg,
  StyledSwitchInput,
  SunSvg,
  ThemeWrapper,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
} from "./ThemeToggle.styled";
import { useTheme } from "styled-components";

function ThemeToggle({ toggleTheme }) {
  const theme = useTheme();
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <ThemeWrapper>
      <SunSvg />
      <ToggleSwitchLabel>
        <StyledSwitchInput
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
        />
        <ToggleSwitchSpan />
      </ToggleSwitchLabel>
      <MoonSvg stroke={theme.iconColorFirst} fill={theme.iconColorFirst} />
    </ThemeWrapper>
  );
}
export default ThemeToggle;
