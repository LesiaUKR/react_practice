import React, { useState } from "react";
import {
  MoonSvg,
  StyledSwitchInput,
  SunSvg,
  ThemeWrapper,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
} from "./ThemeToggle.styled";

function ThemeToggle({ toggleTheme }) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme(); // Викликаємо функцію toggleTheme при зміні стану перемикача
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
      <MoonSvg />
    </ThemeWrapper>
  );
}
export default ThemeToggle;
