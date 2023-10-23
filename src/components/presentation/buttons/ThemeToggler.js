import { useEffect, useState } from "react";
import {
  StyledThemeToggler,
  StyledThemeTogglerContainer,
} from "../navbar/NavBarStyles";
import SunIcon from "../../../assets/icons/SunIcon";
import MoonIcon from "../../../assets/icons/MoonIcon";

const ThemeToggler = ({ theme, toggleTheme, isVisible }) => {
  const [isToggled, setIsToggled] = useState(theme);

  const handleToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    if (theme === "dark") {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [theme]);

  return (
    <StyledThemeTogglerContainer className={isVisible || "hidden"}>
      <SunIcon />
      <StyledThemeToggler>
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span />
      </StyledThemeToggler>
      <MoonIcon />
    </StyledThemeTogglerContainer>
  );
};

export default ThemeToggler;
